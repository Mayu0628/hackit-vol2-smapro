import React, { useState, useEffect } from 'react'

interface TypingDataProps {
  typingData: {
    sourceCode: string
  }[]
  currentTypingIndex: number
}

const TypingDisplay: React.FC<TypingDataProps> = ({ typingData, currentTypingIndex }) => {
  const [typedText, setTypedText] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)

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
    } else {
      console.log('Typing error!')
      e.target.value = input
    }

    // 全文字が正しく入力された場合
    if (userInput === typedText.join('')) {
      console.log('Complete match!')
    }
  }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
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
