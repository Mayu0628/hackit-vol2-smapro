'use client'
import React from "react";
import Popup from "./popup";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Score from "../game-start/components/Score/Score";

const Result = () => {

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



  return (
    <>
    <div>
    <h1>results</h1>
    <p>スコア:<Score/></p>
    </div>
      
      

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
