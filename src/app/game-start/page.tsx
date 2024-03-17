'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { baseUrl } from '../config'
import QuizData from './components/Quiz/QuizData'

const GameStart = () => {
  const [isActive, setIsActive] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const difficulty = searchParams.get('difficulty')

  // console.log('Space', difficulty, `${baseUrl}?difficulty=${difficulty}&limit=2`)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        console.log('Space', difficulty)
        setIsActive(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [difficulty])

  useEffect(() => {
    if (isActive && difficulty) {
      const fetchQuestions = async () => {
        try {
          const response = await fetch(`${baseUrl}?difficulty=${difficulty}&limit=2`)
          const data = await response.json()
          console.log(data)
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

  return (
    <div>
      {isActive ? (
        error ? (
          <div>{error}</div>
        ) : (
          <QuizData quizData={quizData} />
        )
      ) : (
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
