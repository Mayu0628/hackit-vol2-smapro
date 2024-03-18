import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import '@/styles/typing.css'

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
  // const [score, setScore] = useState<number>(0)
  const [time, setTime] = useState<number>(10)
  const [gameover, setGameover] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (time > 0 && !gameover) {
      timer = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (time === 0 && !gameover) {
    }

    return () => clearTimeout(timer)
  }, [time, gameover])

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

  // ゲーム終了時の画面表示を追加
  if (gameover) {
    return (
      <div>
        <h2>ゲーム終了！</h2>
        <Link href='/results'>
          <button>結果へ</button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='typeDis'>
          {/* <p>Time: {time}</p> */}
          {/* <p>Score: {score}</p> */}
          <div style={{ whiteSpace: 'pre-wrap' }} className='codeData'>
            {typedText.map((char, index) => (
              <span key={index} className={input[index] === char ? "correct" : ""}>{char}</span>
            ))}
          </div>
          <textarea onChange={handleInputChange} className='textField'></textarea>
        </div>
      )}
    </div>
  )
}

export default TypingDisplay
