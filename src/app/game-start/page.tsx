import React from "react";
import Link from 'next/link'

const GameStart = () => {
  return (
    <>
      <div>GameStart</div>
      <Link href='/game-play'><button>easy</button></Link>
    </>
  )
};

export default GameStart
