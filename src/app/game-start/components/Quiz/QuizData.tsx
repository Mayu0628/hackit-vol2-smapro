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

  // // 選択された回答の状態管理
  // const [selectedOptionText, setSelectedOptionText] = useState('')
  // // 回答を表示するかどうかの状態管理
  // const [showAnswer, setShowAnswer] = useState(false)
  // // クイズが終了したかどうかの状態管理
  // const [quizOver, setQuizOver] = useState(false)

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

// import React, { useEffect, useState } from 'react'

// interface QuizDataProps {
//   quizData: {
//     id: number
//     options: string[]
//     techName: string
//   }[]
// }

// const QuizData: React.FC<QuizDataProps> = ({ quizData }) => {
//   // 現在の質問のインデックスを状態管理
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   // 選択された回答の状態管理
//   const [selectedOptionText, setSelectedOptionText] = useState('')
//   // 回答を表示するかどうかの状態管理
//   const [showAnswer, setShowAnswer] = useState(false)
//   // クイズが終了したかどうかの状態管理
//   const [quizOver, setQuizOver] = useState(false)
//   // ローディング中かどうかの状態管理
//   const [loading, setLoading] = useState(true)
//   // 質問の結果を状態管理
//   const [questionResults, setQuestionResults] = useState<boolean[]>([])

//   const currentQuestion = quizData[currentQuestionIndex]

//   useEffect(() => {
//     if (quizData.length > 0) {
//       setLoading(false)
//     }
//   }, [quizData])

//   // 回答ボタンを押した時の処理
//   const handleOptionClick = (optionText: string) => {
//     setSelectedOptionText(optionText)
//     setShowAnswer(false)
//   }

//   // 回答ボタンを押した時のレンダリング処理
//   const handleAnswerButtonClick = () => {
//     setShowAnswer(true)

//     // 問題の正誤をチェックして結果を更新
//     const isCorrect = selectedOptionText === currentQuestion.techName
//     setQuestionResults((prevResults) => [...prevResults, isCorrect])

//     // 次の問題へ移動
//     setTimeout(() => {
//       setCurrentQuestionIndex((prevIndex) => {
//         const newIndex = (prevIndex + 1) % quizData.length
//         if (newIndex === 0) {
//           setQuizOver(true)
//         }
//         return newIndex
//       })
//       setSelectedOptionText('')
//       setShowAnswer(false)
//     }, 3000)
//   }

//   console.log('正誤', questionResults)

//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <>
//           <div>
//             {currentQuestion.options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleOptionClick(option)}
//                 style={{
//                   backgroundColor: selectedOptionText === option ? 'lightblue' : 'white',
//                   ...(showAnswer && currentQuestion.techName === option
//                     ? { backgroundColor: 'lightgreen', color: 'white' }
//                     : {}),
//                 }}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//           <button onClick={handleAnswerButtonClick}>回答</button>
//         </>
//       )}
//     </div>
//   )
// }

// export default QuizData
