"use client"
import React, { useState } from 'react'

type Props = {
  initialCount: number
}


const Timescount = ({ initialCount }: Props ) => {
  const [count, setCount] = useState(initialCount)
  
  const tick = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1)
  }

  React.useEffect(() => {
    const timerId = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(timerId)
  }, [count])


  return (
    <div>{ count }</div>

  )
}

export default Timescount