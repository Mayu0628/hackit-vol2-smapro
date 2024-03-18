import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface QuizDataProps {
  quizData: {
    id: number
    options: string[]
    techName: string
  }[]
  setQuestionResults: (results: boolean[]) => void
}

const QuizData: React.FC<QuizDataProps> = ({ quizData, setQuestionResults }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionText, setSelectedOptionText] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [quizOver, setQuizOver] = useState(false)
  const [loading, setLoading] = useState(true)
  const [answersResult, setAnswersResult] = useState<boolean[]>([])

  const correctSound = new Audio('/audio/collectQuiz.mp3');
  const wrongSound = new Audio('/audio/wrongQuiz.mp3');

  const playSound = (isCorrect: boolean) => {
    if (isCorrect) {
      correctSound.play();
    } else {
      wrongSound.play();
    }
  };

  useEffect(() => {
    if (quizData.length > 0) {
      setLoading(false)
    }
  }, [quizData])

  const handleOptionClick = (optionText: string) => {
    setSelectedOptionText(optionText)
    setShowAnswer(false)
  }

  const handleAnswerButtonClick = () => {
    const isCorrect = selectedOptionText === quizData[currentQuestionIndex].techName;
    playSound(isCorrect);
    setShowAnswer(true);
    const isCorrect = quizData[currentQuestionIndex].techName === selectedOptionText
    setAnswersResult([...answersResult, isCorrect])

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

  const currentQuestion = quizData[currentQuestionIndex]

  console.log('正誤', answersResult)

  setQuestionResults(answersResult)

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='quizBtns'>
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
                className='choicesBtn'
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleAnswerButtonClick} className='answerBtn'>
            回答
          </button>
        </div>
      )}
    </div>
  )
}

export default QuizData
