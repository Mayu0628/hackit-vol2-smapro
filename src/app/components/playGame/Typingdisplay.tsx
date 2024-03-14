import { examinations } from '@/types';
import React from 'react'

interface examProps {
  exams: examinations;
}
const Typingdisplay = () => {
  return (
    <div>
      <span>This is a pen.</span>
      <textarea></textarea>
    </div>
  )
}

export default Typingdisplay