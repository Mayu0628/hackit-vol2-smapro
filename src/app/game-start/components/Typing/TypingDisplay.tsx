import React, { useState, useEffect } from 'react'


interface TypingDataProps {
  typingData: {
    sourceCode: string
  }[]
}


const TypingDisplay: React.FC<TypingDataProps> = ({ typingData }) => {
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0)
  const [typedText, setTypedText] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)

  // const typeSound = new Audio('/public/assets/audio/typing-sound.mp3')
  // const errorSound = new Audio('/public/assets/audio/wrong.mp3')
  //const [score, setScore] = useState<number>(0)
  //const [time, setTime] = useState<number>(40)
  // const [gameover, setGameover] = useState<boolean>(false)

  // //   return () => clearTimeout(timer)
  // // }, [time, gameover])

  // const generateNewWord = () => {
  //   const newWord = 'This is not a pen.'
  //   setTypedText(newWord)
  // }

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const userInput = e.target.value
  //   setInput(userInput)
  //   if (!gameover) {
  //     if (userInput === word) {
  //       generateNewWord()
  //     }
  //   }
  // }

  useEffect(() => {
    if (typingData.length > 0) {
      setLoading(false)
    }
  }, [typingData])

  const currentTyping = typingData[currentTypingIndex]

  useEffect(() => {
    if (currentTyping) {
      const text = currentTyping.sourceCode.split('')
      setTypedText(text)
    }
  }, [currentTyping])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const userInput = e.target.value

    let isMatch = true
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== typedText[i]) {
        isMatch = false
        break
      }
    }

    if (isMatch) {
      // 入力が一致する場合は許可
      setInput(userInput)
      setCurrentTypingIndex(currentTypingIndex + 1)
      // TypingDisplay.tsx
    } else {
      console.log('Typing error!')
      // 一致しない場合は、入力フィールドを最後の正しい入力にリセット
      e.target.value = input
    }

    // 全文字が正しく入力された場合
    if (userInput === typedText.join('')) {
      // const completeSound = new Audio('/public/assets/audio/correct.mp3')
      // completeSound.play()
      // completeSound.currentTime = 0
      console.log('Complete match!')
    }
  }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
          // TypingDisplay.tsx
        <>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {typedText.map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
          <textarea onChange={handleInputChange}></textarea>
        </>
      )}
    </div>
  )
}

export default TypingDisplay
