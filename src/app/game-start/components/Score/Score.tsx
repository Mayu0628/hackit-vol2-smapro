"use client"
import React, { useState } from 'react'

// データを受け取る
interface ScoreProps {
    currentTyping?: number;
    currentQuestion?: boolean[];
    SelectCourse?: string;
  }
  

const Score: React.FC<ScoreProps> = ({ currentTyping=0 ,currentQuestion=[false], SelectCourse="normal"}) => {
    let Scor = 0;
// タイピングの計算
    Scor = currentTyping * 100
// クイズ回答の計算
    if(SelectCourse === "easy"){
        for(let i=0; i<currentQuestion.length;i++){
            if (currentQuestion[i]){
                Scor += 500;
                }
        }
    }else if(SelectCourse === "normal"){
        for(let i=0; i<currentQuestion.length;i++){
            if (currentQuestion[i]){
                Scor += 1000;
            }
            }
    }else if(SelectCourse === "hard"){
        for(let i=0; i<currentQuestion.length;i++){
            if (currentQuestion[i]){
                Scor += 1500;
            }
        }
    }
    return Scor
}

export default Score