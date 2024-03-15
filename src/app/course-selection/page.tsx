import React from 'react'
import Link from 'next/link'

const CourseSelection = () => {
  return (
    <>
      <div>CourseSelection</div>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'easy'} }}>
        <button>easy</button>
      </Link>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'normal'} }}>
        <button>nomal</button>
      </Link>
      <Link href={{ pathname: '/game-start', query: {difficulty: 'hard'} }}>
        <button>hard</button>
      </Link>
    </>
  )
}

export default CourseSelection
