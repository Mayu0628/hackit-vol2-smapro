'use client'

import React, { useEffect, useState } from 'react'
import Select from '@/app/components/GameScreen/Quiz/QuizData'
import Timescount from '@/app/components/playGame/Timescount'
import Answercount from '../components/playGame/Answercount'
import Typingdisplay from '../components/playGame/Typingdisplay'

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
        <li>
          <Answercount />
          <Timescount initialCount={40} />
          <Typingdisplay />
          <Select />
        </li>
        
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
