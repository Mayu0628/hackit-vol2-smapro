'use client'
import React from "react";
import Popup from "./popup";
import Link from "next/link";

const Result = () => {

  const corrects = [
    {
      lang: "React",
      bool: "◎"
    },{
      lang: "Go",
      bool: "✕"
    }

  ]

  return (
    <>
      <h1>results</h1>

      {corrects.map((lang) => {
        return(
          <div className="langs">
            <div>{lang.bool}</div>
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
