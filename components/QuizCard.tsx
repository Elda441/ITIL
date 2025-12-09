import React from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  selectedOptionIndex: number | null;
  onOptionSelect: (index: number) => void;
  showFeedback: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedOptionIndex,
  onOptionSelect,
  showFeedback
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl w-full mx-auto animate-fadeIn">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          let optionClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ";
          
          if (showFeedback) {
            if (index === question.correctAnswerIndex) {
              // Correct answer always green in feedback mode
              optionClass += "bg-green-50 border-green-500 text-green-800";
            } else if (index === selectedOptionIndex) {
              // Wrong selected answer red
              optionClass += "bg-red-50 border-red-500 text-red-800";
            } else {
              // Others faded
              optionClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
            }
          } else {
            // Interactive mode
            if (selectedOptionIndex === index) {
              optionClass += "bg-blue-50 border-blue-500 text-blue-800 shadow-md";
            } else {
              optionClass += "bg-white border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700";
            }
          }

          return (
            <button
              key={index}
              disabled={showFeedback}
              onClick={() => onOptionSelect(index)}
              className={optionClass}
            >
              <span className="font-medium text-lg">{option}</span>
              {showFeedback && index === question.correctAnswerIndex && (
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {showFeedback && selectedOptionIndex === index && index !== question.correctAnswerIndex && (
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-slideUp">
          <p className="font-semibold text-blue-900 mb-1">Erklärung:</p>
          <p className="text-blue-800 text-sm leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};