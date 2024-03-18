'use client'
import React from "react";
import Popup from "./popup";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQuizData } from '@/app/context/QuizDataContext'

const Result = () => {
  const { quizData, setQuizData } = useQuizData();
  console.log(quizData);

  // 仮の答え
  const corrects = [
    {
      lang: "React",
      bool: true
    },{
      lang: "Go",
      bool: false
    }
  ]

  // クエリパラメータ取り出し
  const searchParams = useSearchParams();
  const scor = searchParams.get("scor")

  return (
    <>
      <h1>results</h1>
      <p>スコア:{scor}</p>

      {corrects.map((lang) => {
        return(
          <div className="langs">
            <div>{lang.bool ? '◎' : '✕'}</div>
            <div>{lang.lang}</div>
            <Popup buttonLabel="解説"/>

            <style jsx>{`
              .langs{
                display: flex
              }
            `}</style>
          </div>
        )
      })}

      <Link href='/'><button>ホームに戻る</button></Link>
      <Link href='/course-selection'><button>コース選択</button></Link>
      <Link href='/game-start'><button>もう一度</button></Link>
    </>
  );
};

export default Result
