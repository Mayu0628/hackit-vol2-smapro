'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { baseUrl } from '../config'
import QuizData from './components/Quiz/QuizData'
import TypingDisplay from './components/Typing/TypingDisplay'
import Timer from './components/Timer'
import Link from 'next/link'

const GameStart = () => {
  // スペースキーの状態を管理
  const [isActive, setIsActive] = useState(false)
  // クイズデータの状態を管理
  const [quizData, setQuizData] = useState([])
  // タイマーが終了したかどうかの状態を管理
  const [gameover, setGameover] = useState<boolean>(false)
  // エラーメッセージの状態を管理
  const [error, setError] = useState('')
  // 現在の問題のインデックスを管理
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  // 回答の状態を管理
  const [questionResults, setQuestionResults] = useState<boolean[]>([])

  // URLパラメータから難易度を取得
  const searchParams = useSearchParams()
  const difficulty = searchParams.get('difficulty')

  // スペースキーを押した時の処理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !gameover) {
        // gameover 状態でないことを確認
        setIsActive(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [difficulty, gameover])

  // クイズデータを取得する処理
  useEffect(() => {
    if (isActive && difficulty) {
      const fetchQuestions = async () => {
        try {
          const response = await fetch(`${baseUrl}?difficulty=${difficulty}&limit=3`)
          const data = await response.json()
          setQuizData(data)
          setError('')
        } catch (fetchError) {
          console.error('Error fetching questions:', error)
          setError('質問の取得中にエラーが発生しました。')
        }
      }
      fetchQuestions()
    }
  }, [isActive, difficulty])

  // ゲーム終了時の処理
  const handleGameover = () => {
    setGameover(true)
  }

  // 回答が正しいかを判断し、次の問題に移動する処理
  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setQuestionResults((prevResults) => [...prevResults, isCorrect])
      const nextIndex =
        currentQuestionIndex + 1 < quizData.length ? currentQuestionIndex + 1 : 0
      setCurrentQuestionIndex(nextIndex)
    }
  }

  const onAnswerButtonClick = () => {
    const isCorrect = true;
    handleNextQuestion(isCorrect);
  }

  console.log('正誤', questionResults)

  return (
    <div>
      {isActive && !gameover ? (
        error ? (
          <div>{error}</div>
        ) : (
          <>
            <Timer
              initialTime={10}
              isGameActive={!gameover}
              onGameover={handleGameover}
            />
            <QuizData
              quizData={quizData}
              currentQuestionIndex={currentQuestionIndex}
              onAnswerSelected={handleNextQuestion}
            />
            <TypingDisplay
              typingData={quizData}
              currentTypingIndex={currentQuestionIndex}
            />
            <button onClick={onAnswerButtonClick}>回答</button>
          </>
        )
      ) : gameover ? (
        // ゲーム終了時の表示
        <div>
          <h2>ゲーム終了！</h2>
          <Link href='/results'>
            <button>結果画面へ</button>
          </Link>
        </div>
      ) : (
        // ゲーム開始前の表示
        <div>
          <p>説明</p>
          <p>spaceキーを押して開始</p>
          {difficulty && <p>難易度: {difficulty}</p>}
        </div>
      )}
    </div>
  )
}

export default GameStart
