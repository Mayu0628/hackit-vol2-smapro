import React from 'react'
import Link from 'next/link'

const CourseSelection = () => {
  return (
    <>
      <div>CourseSelection</div>
      <Link href='/game-start'>
        <button>easy</button>
        <button>nomal</button>
        <button>hard</button>
      </Link>
    </>
  )
}

export default CourseSelection
