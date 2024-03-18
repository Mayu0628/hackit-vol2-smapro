import React, { useEffect, useState } from 'react'

interface QuizDataProps {
  quizData: {
    id: number
    options: string[]
    techName: string
  }[]
  currentQuestionIndex: number
  onAnswerSelected: (isCorrect: boolean) => void
}

const QuizData: React.FC<QuizDataProps> = ({
  quizData,
  currentQuestionIndex,
  onAnswerSelected,
}) => {
  // ローディング中かどうかの状態管理
  const [loading, setLoading] = useState(true)
  // 現在の質問を格納
  const currentQuestion = quizData[currentQuestionIndex]

  useEffect(() => {
    if (quizData.length > 0) {
      setLoading(false)
    }
  }, [quizData])

  // 選択肢ボタンを押した時の処理
  const handleOptionClick = (option: string) => {
    // 選択肢が正解かどうかを判断
    const isCorrect = option === currentQuestion.techName
    onAnswerSelected(isCorrect)
  }

  useEffect(() => {
    if (quizData.length > 0) {
      setLoading(false)
    }
  }, [quizData])

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{ backgroundColor: 'white' }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default QuizData
