import React from 'react'
import Link from 'next/link'
import '@/styles/course-selection.css'

const CourseSelection = () => {
  return (
    <div className='page'>
      <div className='title'>コース選択</div>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'easy'} }}>
        <button className="easy courseBtn">EASY</button>
      </Link>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'normal'} }}>
        <button className='normal courseBtn'>NORMAL</button>
      </Link>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'hard'} }}>
        <button className='hard courseBtn'>HARD</button>
      </Link>

      <Link href={'/'} className='toTitle'>◀タイトルに戻る</Link>
    </div>
  )
}

export default CourseSelection
