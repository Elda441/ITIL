import React, { useState, useEffect, useCallback } from 'react';
import { generateQuestions } from './services/geminiService';
import { Question, AppStatus, QuizResult } from './types';
import { Button } from './components/Button';
import { QuizCard } from './components/QuizCard';

// Icons
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600 mb-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const TrophyIcon = ({ passed }: { passed: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-16 h-16 mb-4 ${passed ? 'text-green-500' : 'text-red-500'}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.063 2.063 0 00-2.063-2.063c-.618 0-1.215.247-1.652.684-.436.437-.684 1.034-.684 1.652v5.969m8.25-5.625a6.002 6.002 0 01-1.125 3.658m0 0l3.375 3.375M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

export default function App() {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]); // Indexes of user choices
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = async (mode: 'static' | 'ai') => {
    setStatus(AppStatus.LOADING);
    try {
      const generatedQuestions = await generateQuestions(mode);
      setQuestions(generatedQuestions);
      setCurrentIndex(0);
      setUserAnswers([]);
      setScore(0);
      setSelectedOption(null);
      setIsAnswerConfirmed(false);
      setStatus(AppStatus.QUIZ);
    } catch (e) {
      console.error(e);
      setStatus(AppStatus.ERROR);
    }
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswerConfirmed) return;
    setSelectedOption(index);
  };

  const confirmAnswer = () => {
    if (selectedOption === null) return;
    
    setIsAnswerConfirmed(true);
    const isCorrect = selectedOption === questions[currentIndex].correctAnswerIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setUserAnswers(prev => [...prev, selectedOption]);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerConfirmed(false);
    } else {
      setStatus(AppStatus.FINISHED);
    }
  };

  // Render Start Screen
  if (status === AppStatus.IDLE) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
          <div className="flex justify-center"><BookIcon /></div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ITIL 4 Master Class</h1>
          <p className="text-gray-500 mb-8">Bereite dich auf deine Foundation Prüfung vor.</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-3 border border-gray-100">
            <div className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span>40 Fragen pro Durchgang</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span>Mind. 26 richtig (65%) zum Bestehen</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button onClick={() => startQuiz('static')} fullWidth className="text-lg py-4 flex items-center justify-center">
              <LightningIcon />
              Schnellstart (Ladezeit: 0s)
            </Button>
            
            <Button onClick={() => startQuiz('ai')} fullWidth variant="secondary" className="text-lg py-4 flex items-center justify-center">
              <SparklesIcon />
              Neue Fragen generieren (KI)
            </Button>
            <p className="text-xs text-gray-400 mt-2">Der KI-Modus benötigt ca. 5-10 Sekunden zur Erstellung.</p>
          </div>
        </div>
      </div>
    );
  }

  // Render Loading
  if (status === AppStatus.LOADING) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
        <h2 className="text-xl font-semibold text-gray-800 animate-pulse">Lade Prüfung...</h2>
        <p className="text-gray-500 mt-2">Wir bereiten die Fragen für dich vor.</p>
      </div>
    );
  }

  // Render Error
  if (status === AppStatus.ERROR) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Fehler aufgetreten</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">Die Prüfung konnte nicht geladen werden. Bitte stelle sicher, dass der API Key korrekt ist.</p>
        <Button onClick={() => setStatus(AppStatus.IDLE)}>Zurück zum Start</Button>
      </div>
    );
  }

  // Render Quiz
  if (status === AppStatus.QUIZ && questions.length > 0) {
    const progress = ((currentIndex + 1) / questions.length) * 100;
    const currentQ = questions[currentIndex];

    return (
      <div className="min-h-screen flex flex-col max-w-4xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Frage {currentIndex + 1} von {questions.length}</span>
            <div className="w-full md:w-64 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-gray-500 font-medium">Score: {score}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="flex-grow flex flex-col justify-center">
          <QuizCard 
            question={currentQ}
            selectedOptionIndex={selectedOption}
            onOptionSelect={handleOptionSelect}
            showFeedback={isAnswerConfirmed}
          />
        </div>

        {/* Controls */}
        <div className="mt-8 sticky bottom-6 z-10">
          {!isAnswerConfirmed ? (
            <Button 
              onClick={confirmAnswer} 
              disabled={selectedOption === null}
              fullWidth
              className="shadow-xl"
            >
              Antwort Bestätigen
            </Button>
          ) : (
            <Button 
              onClick={nextQuestion} 
              fullWidth
              variant="primary"
              className="bg-gray-900 hover:bg-black shadow-xl"
            >
              {currentIndex === questions.length - 1 ? "Ergebnis anzeigen" : "Nächste Frage"}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Render Result
  if (status === AppStatus.FINISHED) {
    const passed = score >= 26;
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center">
          <div className="flex justify-center">
            <TrophyIcon passed={passed} />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {passed ? "Prüfung Bestanden!" : "Leider nicht bestanden"}
          </h2>
          
          <div className="text-6xl font-black my-6 text-gray-800">
            {percentage}%
          </div>
          
          <p className="text-gray-600 mb-8 text-lg">
            Du hast <strong className={passed ? "text-green-600" : "text-red-600"}>{score}</strong> von <strong>{questions.length}</strong> Fragen richtig beantwortet.
            {passed 
              ? " Großartige Arbeit! Du bist bereit für die Zertifizierung."
              : " Du benötigst 26 Punkte (65%) zum Bestehen. Versuche es nochmal!"}
          </p>

          <div className="flex flex-col gap-3">
            <Button onClick={() => startQuiz('static')} fullWidth>
              Schnellstart (Gleiche Fragen)
            </Button>
            <Button onClick={() => startQuiz('ai')} variant="outline" fullWidth>
               Neue Fragen generieren (KI)
            </Button>
             <Button onClick={() => setStatus(AppStatus.IDLE)} variant="secondary" fullWidth>
              Hauptmenü
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}