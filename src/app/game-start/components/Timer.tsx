import React, { useEffect, useState } from 'react'

interface TimerProps {
  initialTime: number
  isGameActive: boolean
  onGameover: () => void
}

const Timer: React.FC<TimerProps> = ({ initialTime, isGameActive, onGameover }) => {
  const [time, setTime] = useState(initialTime)

  // カウントダウンを管理するuseEffect
  useEffect(() => {
    if (!isGameActive) return

    let timer: ReturnType<typeof setTimeout> | null = null

    if (time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000)
    } else if (time === 0) {
      timer = setTimeout(onGameover, 1000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [time, isGameActive, onGameover])

  return <p>Time: {time}</p>
}

export default Timer
