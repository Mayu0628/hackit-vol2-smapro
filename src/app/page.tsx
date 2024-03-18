'use client'
import GameRules from './game-rules/gameRoules'
import Link from 'next/link'
import Image from 'next/image'
import { useGameData } from './GameDataProvider'
import logo from '@/styles/images/logo.png'
import catImage from '@/styles/images/cat-image.png'

export default function Home() {
  return (
    <>
      <div>
      <Image
            src={logo}
            height={500}
            alt='cat-image'
            className='image'
        ></Image>
        <Link href='/course-selection'>
          <button>コース選択</button>
        </Link>
        <GameRules buttonLabel='遊び方' />
      </div>
      <div>
        <Image
            src={catImage}
            height={500}
            alt='cat-image'
            className='image'
        ></Image>
      </div>
    </>
  )
}
