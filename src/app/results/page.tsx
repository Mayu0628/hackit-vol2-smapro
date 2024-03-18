'use client'

import Popup from './popup'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useGameData } from '../GameDataProvider'
import '@/styles/global.css'

const Result = () => {
  const { gamedata } = useGameData()
  console.log('gamedata:', gamedata)
  const searchParams = useSearchParams()
  const calculatedScore = searchParams.get('score')

  if (gamedata.length === 0) {
    return (
      <div>
        <Link href='/'>
          <button>ホームに戻る</button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <h1>results</h1>
      <h2>スコア: {calculatedScore}</h2>
      {gamedata.map((lang, index) => {
        return (
          <div key={index}>
            <div>{lang.techName}</div>
            <div>{lang.id}</div>
            <Popup buttonLabel='解説' />
          </div>
        )
      })}

      <Link href='/'>
        <button>ホームに戻る</button>
      </Link>
      <Link href='/course-selection'>
        <button>コース選択</button>
      </Link>
      <Link href='/game-start'>
        <button>もう一度</button>
      </Link>
    </>
  )
}

export default Result
