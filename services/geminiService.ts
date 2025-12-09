import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Question } from "../types";
import { STATIC_QUESTIONS } from "../data/staticQuestions";

// Helper to shuffle the final array so topics are mixed
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const fetchBatch = async (ai: GoogleGenAI, prompt: string, count: number): Promise<Question[]> => {
  const questionSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      questions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            text: {
              type: Type.STRING,
              description: "Der Fragetext auf Deutsch zur ITIL 4 Foundation Prüfung.",
            },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Eine Liste von genau 4 Antwortmöglichkeiten.",
            },
            correctAnswerIndex: {
              type: Type.INTEGER,
              description: "Der Index der korrekten Antwort (0, 1, 2 oder 3).",
            },
            explanation: {
              type: Type.STRING,
              description: "Eine kurze Erklärung, warum die Antwort richtig ist.",
            },
          },
          required: ["text", "options", "correctAnswerIndex", "explanation"],
        },
      },
    },
    required: ["questions"],
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Erstelle ${count} Multiple-Choice-Fragen für die ITIL 4 Foundation Prüfung auf Deutsch.
      
      THEMEN-FOKUS FÜR DIESEN BATCH:
      ${prompt}

      Formatierung:
      - Jede Frage MUSS exakt 4 Antwortmöglichkeiten haben.
      - Genau EINE Antwort ist richtig.
      - Die Fragen sollen im Stil der echten Prüfung formuliert sein.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.3, 
      },
    });

    const output = JSON.parse(response.text || "{}");
    return Array.isArray(output.questions) ? output.questions : [];
  } catch (error) {
    console.error("Batch generation failed:", error);
    return []; // Return empty on fail to not crash the whole promise.all
  }
};

const getStaticQuestions = (): Question[] => {
  // Select 40 questions from the static list (currently we have 40, so we take all)
  // If we add more later, we could slice them.
  const rawQuestions = shuffleArray(STATIC_QUESTIONS).slice(0, 40);
  
  return rawQuestions.map((q, index) => ({
    id: index,
    ...q
  }));
};

const generateQuestions = async (mode: 'static' | 'ai' = 'static'): Promise<Question[]> => {
  
  if (mode === 'static') {
    return getStaticQuestions();
  }

  // AI MODE
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  // We split the 40 questions into 4 parallel requests of 10 questions each.
  // This drastically reduces latency (approx 4x faster).
  // Total Target:
  // 1. Concepts: 5
  // 2. Principles: 7
  // 3. Dimensions: 2
  // 4. SVS/SVC: 3
  // 5. Practices: 23
  // Total: 40

  const batchPrompts = [
    // Batch 1: General Theory (10 Questions)
    // 5 Concepts + 2 Dimensions + 3 SVS/SVC
    `Generiere exakt:
     - 5 Fragen zu 'Grundbegriffe des Service Managements' (Key Concepts)
     - 2 Fragen zu 'Die vier Dimensionen des Service Managements'
     - 3 Fragen zu 'Service Value System (SVS) & Service Value Chain'`,

    // Batch 2: Principles & Intro Practices (10 Questions)
    // 7 Principles + 3 Practices
    `Generiere exakt:
     - 7 Fragen zu 'Die Grundprinzipien' (Guiding Principles)
     - 3 Fragen zu 'Management Practices' (Allgemeine Definitionen)`,

    // Batch 3: Core Practices A (10 Questions)
    `Generiere exakt 10 Fragen zu 'Management Practices'.
     Fokus auf: Service Desk, Incident Management, Problem Management.`,

    // Batch 4: Core Practices B (10 Questions)
    `Generiere exakt 10 Fragen zu 'Management Practices'.
     Fokus auf: Service Request Management, Service Level Management, Change Enablement, Continual Improvement.`
  ];

  try {
    // Fire all requests in parallel
    const batchResults = await Promise.all(
      batchPrompts.map(prompt => fetchBatch(ai, prompt, 10))
    );

    // Flatten results
    let allQuestions = batchResults.flat();

    // Safety check: If we somehow got fewer than 40 (e.g. one batch failed or hallucinated count), 
    // we just use what we have, but usually Promise.all works well.
    
    // Map to final structure with IDs
    const finalQuestions = allQuestions.map((q: any, index: number) => ({
      id: index,
      text: q.text,
      options: q.options,
      correctAnswerIndex: q.correctAnswerIndex,
      explanation: q.explanation
    }));

    return shuffleArray(finalQuestions);

  } catch (error) {
    console.error("Failed to generate quiz:", error);
    throw error;
  }
};

export { generateQuestions };