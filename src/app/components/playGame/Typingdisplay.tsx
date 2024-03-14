import { examinations } from '@/types';
import React from 'react'

interface examProps {
  exams: examinations;
}
const Typingdisplay = ({ exams }: examProps) => {
  return (
    <div>
      <li
        key={exams.id}>
          <span>{exams.text}</span>
      </li>
    </div>
  )
}

export default Typingdisplay