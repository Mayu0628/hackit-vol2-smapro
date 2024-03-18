'use client'
import GameRules from './game-rules/gameRoules'
import Link from 'next/link'
import { useGameData } from './GameDataProvider'

export default function Home() {
  const { gamedata } = useGameData()

  return (
    <>
      <h1>top</h1>
      <p>{gamedata.techName}</p>
      <p>{gamedata.id}</p>
      <div>
        <Link href='/course-selection'>
          <button>コース選択</button>
        </Link>
        <GameRules buttonLabel='遊び方' />
      </div>
    </>
  )
}
