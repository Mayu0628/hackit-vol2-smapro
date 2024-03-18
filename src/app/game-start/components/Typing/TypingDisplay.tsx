'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import '@/styles/typing.css'


interface TypingDataProps {
  typingData: {
    sourceCode: string
  }[]
  updateCountTyping: (count: number) => void
  currentGameIndex: number
}

const TypingDisplay: React.FC<TypingDataProps> = ({
  typingData,
  updateCountTyping,
  currentGameIndex,
}) => {
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0)
  const [typedText, setTypedText] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState<number>(10)
  const [gameover, setGameover] = useState<boolean>(false)

  // タイプ音のAudioオブジェクトを作成
  const correctTypingSound = new Audio('/audio/typing-sound.mp3')
  const errorTypingSound = new Audio('/audio/wrong.mp3')

  // タイピングデータを配列で取得
  const currentTyping = typingData[currentGameIndex]

  const TY = typingData[currentGameIndex]
  console.log(TY)

  // タイマーが終了した時の処理
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (time > 0 && !gameover) {
      timer = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }

    // タイマーが0になった時の処理
    return () => clearTimeout(timer)
  }, [time, gameover])

  // タイピングデータの読み込みが完了した時の処理
  useEffect(() => {
    if (typingData.length > 0) {
      setLoading(false)
    }
  }, [typingData])

  // タイピングゲームの処理
  useEffect(() => {
    if (currentTyping) {
      const text = currentTyping.sourceCode.split('')
      setTypedText(text)
    }
  }, [currentTyping])

  // タイピンゲームの入力処理
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const userInput = e.target.value

    let isMatch = true
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== typedText[i]) {
        isMatch = false
        break
      }
    }

    // 正解か不正解かに応じて適切な音声を再生
    if (isMatch) {
      correctTypingSound.play()
    } else {
      errorTypingSound.pause()
      errorTypingSound.currentTime = 0
      errorTypingSound.play()
    }

    if (isMatch) {
      // 入力が一致する場合は許可
      setInput(userInput)
      updateCountTyping(userInput.length)
    } else {
      console.log('Typing error!')
      // 一致しない場合は、入力フィールドを最後の正しい入力にリセット
      e.target.value = input
    }

    // 全文字が正しく入力された場合
    if (userInput === typedText.join('')) {
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
        <>
          <div className='typeDis'>
            {/* <p>Time: {time}</p> */}
            {/* <p>Score: {score}</p> */}
            <div style={{ whiteSpace: 'pre-wrap' }} className='codeData'>
              {typedText.map((char, index) => (
                <span key={index} className={input[index] === char ? 'correct' : ''}>
                  {char}
                </span>
              ))}
            </div>
          </div>
          <textarea onChange={handleInputChange} className='textField' autoFocus />
        </>
      )}
    </div>
  )
}

export default TypingDisplay
