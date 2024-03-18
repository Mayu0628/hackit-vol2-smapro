'use client'

import Popup from './popup'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useGameData } from '../GameDataProvider'
import '@/styles/global.css'
import '@/styles/results.css'

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
    <div>
      <div className='result'>
        <h1>results</h1>
        <h2>スコア: {calculatedScore}</h2>
        <div className='anderBox'>
          {gamedata.map((lang, index) => {
            return (
              <div key={index} className='answer'>
                <div className='lang'>{lang.techName}</div>
                <div>{lang.id}</div>
                <Popup 
                  buttonLabel='解説'
                  techName={lang.techName}
                  techDesc={lang.techDesc}
                  sourceCode={lang.sourceCode}
                  codeDesc={lang.codeDesc}
                  result={lang.result}
                  docLink={lang.docLink}
                />
              </div>
            )
          })}
        </div>
      </div>

      <Link href='/'>
        <button className='underBtn tohome'>ホームに戻る</button>
      </Link>
      <Link href='/course-selection'>
        <button className='underBtn toCourse'>コース選択</button>
      </Link>
    </div>
  )
}

export default Result
