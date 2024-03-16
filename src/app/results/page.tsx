'use client'
import React from "react";
import Popup from "./popup";

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
    </>
  );
};

export default Result
