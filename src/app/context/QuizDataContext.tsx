'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';

interface QuizOption {
    id: number;
    difficulty: string;
    techName: string;
    sourceCode: string;
    options: string[];
    techDesc: string;
    codeDesc: string;
    result: string;
    docLink: string;
}

interface QuizDataContextType {
    quizData: QuizOption[];
    setQuizData: React.Dispatch<React.SetStateAction<QuizOption[]>>;
}

const QuizDataContext = createContext<QuizDataContextType | undefined>(undefined);

export const useQuizData = () => {
  const context = useContext(QuizDataContext);
  if (context === undefined) {
    throw new Error('useQuizData must be used within a QuizDataProvider');
  }
  return context;
};

export const QuizDataProvider = ({ children }: { children: ReactNode }) => {
  const [quizData, setQuizData] = useState<QuizOption[]>([]);

  return (
    <QuizDataContext.Provider value={{ quizData, setQuizData }}>
      {children}
    </QuizDataContext.Provider>
  );
};
