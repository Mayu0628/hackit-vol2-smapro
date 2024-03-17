import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface QuizDataProps {
  quizData: {
    id: number
    options: string[]
    techName: string
  }[]
}

const QuizData: React.FC<QuizDataProps> = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionText, setSelectedOptionText] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [quizOver, setQuizOver] = useState(false)
  const [loding, setLoding] = useState(true)

  useEffect(() => {
    console.log('受け取ったquizData:', quizData)
  }, [quizData])

  useEffect(() => {
    if (quizData.length > 0) {
      setLoding(false)
    }
  }, [quizData])

  // 回答ボタンを押した時の処理
  const handleOptionClick = (optionText: string) => {
    setSelectedOptionText(optionText)
    setShowAnswer(false)
  }

  // 回答ボタンを押した時のレンダリング処理
  const handleAnswerButtonClick = () => {
    setShowAnswer(true)

    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % quizData.length
        if (newIndex === 0) {
          setQuizOver(true)
        }
        return newIndex
      })
      setSelectedOptionText('')
      setShowAnswer(false)
    }, 5000)
  }

  if (quizOver) {
    return (
      <div>
        <h2>クイズ終了！</h2>
        <Link href='/results'>
          <button>結果画面へ</button>
        </Link>
      </div>
    )
  }

  console.log('questions', quizData)

  const currentQuestion = quizData[currentQuestionIndex]
  console.log('currentQuestion', currentQuestion)

  return (
    <div>
      {loding ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  backgroundColor: selectedOptionText === option ? 'lightblue' : 'white',
                  ...(showAnswer && currentQuestion.techName === option
                    ? { backgroundColor: 'lightgreen', color: 'white' }
                    : {}),
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleAnswerButtonClick}>回答</button>
        </>
      )}
    </div>
  )
}

export default QuizData
