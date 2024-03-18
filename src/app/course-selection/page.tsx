import React from 'react'
import Link from 'next/link'
import '@/styles/course-selection.css'
import '@/styles/global.css'

const CourseSelection = () => {
  return (
    <div className='page'>
      <div className='title'>コース選択</div>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'easy'} }}>
        <button className='easy'>EASY</button>
      </Link>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'normal'} }}>
        <button className='normal'>NORMAL</button>
      </Link>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'hard'} }}>
        <button className='hard'>HARD</button>
      </Link>

      <Link href={'/'} className='toTitle'>◀タイトルに戻る</Link>
    </div>
  )
}

export default CourseSelection
