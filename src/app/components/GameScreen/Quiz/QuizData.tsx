import React, { useState } from 'react'

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionText, setSelectedOptionText] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [questions, setQuestions] = useState([
    {
      id: 1,
      options: ['Go', '選択肢2', '選択肢3', '選択肢4'],
      techName: 'Go',
    },
    {
      id: 2,
      options: ['Python', '選択肢2', '選択肢3', '選択肢4'],
      techName: 'Python',
    },
  ])

  const handleOptionClick = (optionText: string) => {
    setSelectedOptionText(optionText)
    setShowAnswer(false)
  }

  const handleAnswerButtonClick = () => {
    setShowAnswer(true)

    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length)
      setSelectedOptionText('')
      setShowAnswer(false)
    }, 1000)
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>クイズ終了！</h2>
      </div>
    )
  }

  return (
    <div>
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            style={{
              backgroundColor: selectedOptionText === option ? 'lightblue' : 'white',
              ...(showAnswer && questions[currentQuestionIndex].techName === option
                ? { backgroundColor: 'lightgreen', color: 'white' }
                : {}),
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleAnswerButtonClick}>回答</button>
    </div>
  )
}

export default QuizGame
