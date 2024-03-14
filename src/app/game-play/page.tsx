"use client"
import React from 'react'
import Answercount from '../components/playGame/Answercount';
import Timescount from '../components/playGame/Timescount';
import Typingdisplay from '../components/playGame/Typingdisplay';
import Chooseanswer from '../components/playGame/Chooseanswer';
import { examinations } from '@/types';

interface examselectProps {
  exams: examinations[];
}


const Gameplay = ({ exams }: examselectProps) => {
  return (
    <main>
        <div>
            <div>
                <Answercount />
                <Timescount initialCount={40} />
                <Chooseanswer />
            </div>
        </div>
    </main>
  );
};

export default Gameplay