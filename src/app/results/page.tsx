'use client'

import Popup from './popup'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useGameData } from '../GameDataProvider'

const Result = () => {
  // クエリパラメータ取り出し
  const searchParams = useSearchParams()
  const scor = searchParams.get('scor')

  const { gamedata } = useGameData()
  console.log('gamedata:', gamedata)

  if (gamedata.length === 0) {
    return (
      <div>
        <Link href='/'>
          <button>ホームに戻る</button>
        </Link>
      </div>
    )
  }

  // const currentQuestion = gamedata[gameDataIndex]

  return (
    <>
      <h1>results</h1>
      {gamedata.map((lang, index) => {
        return (
          <div key={index}>
            <p>スコア:{scor}</p>
            <div>{lang.techName}</div>
            <div>{lang.id}</div>
            <Popup buttonLabel='解説' />
            <div></div>
            <style jsx>{`
              .langs {
                display: flex;
              }
            `}</style>
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
