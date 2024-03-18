import React, { useState } from 'react'

// データを受け取る
interface ScoreProps {
    currentTypingIndex?: number;
    currentQuestionIndex?: boolean[];
    SelectCourse?:string[];
  }
  

const Score: React.FC<ScoreProps> = ({ currentTypingIndex=0 ,currentQuestionIndex=[false], SelectCourse=["normal"]}) => {
    const[Score,setScore] = useState<number>(0)
    // タイピングのスコア計算
    setScore(Score + currentTypingIndex * 100);
    // クイズのスコア計算
    try {
        if(SelectCourse[0]){
            for(let i=0; i<currentQuestionIndex.length;i++){
                if (currentQuestionIndex[i]){
                    setScore(Score + 1000);
                }
            }
        }else if(SelectCourse[1]){
            for(let i=0; i<currentQuestionIndex.length;i++){
                if (currentQuestionIndex[i]){
                    setScore(Score + 1500);
                }
            }
        }else if(SelectCourse[2]){
            for(let i=0; i<currentQuestionIndex.length;i++){
                if (currentQuestionIndex[i]){
                    setScore(Score + 500);
                }
            }
        }
    } catch (fetcherror) {
        setScore(Score + 1)
    }
    
  return (
    <div>score:{Score}</div>
  )
}

export default Score