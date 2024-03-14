'use client'

import React, { useEffect, useState } from 'react'
import QuizData from '@/app/components/GameScreen/Quiz/QuizData'

const GameStart = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    console.log('useEffect')

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        console.log('Space')
        setIsActive(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div>
      {isActive ? (
        <QuizData />
      ) : (
        <div>
          <p>説明</p>
          <p>spaceキーを押して開始</p>
        </div>
      )}
    </div>
  )
}

export default GameStart
