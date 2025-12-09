export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizResult {
  score: number;
  passed: boolean;
  totalQuestions: number;
  answers: {
    questionId: number;
    userChoiceIndex: number;
    isCorrect: boolean;
  }[];
}

export enum AppStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  QUIZ = 'QUIZ',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}