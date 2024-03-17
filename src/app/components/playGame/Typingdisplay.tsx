import React, { useState, useEffect } from 'react';


const Typingdisplay = () => {
  
  const [word, setWord] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(40);
  const [gameover, setGameover] = useState<boolean>(false);

  useEffect(() => {
    generateNewWord();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (time > 0 && !gameover) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0 && !gameover) {

      setGameover(true);
      alert("ゲーム終了！");
    }
    
    return () => clearTimeout(timer);
   }, [time, gameover]);

   const generateNewWord = () => {
    const newWord = 'This is not a pen.';
    newWord
    setWord(newWord);
    setInput('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInput(userInput);
    if (!gameover) {
      if (userInput === word) {
        generateNewWord();
      }
    }
  }



  return (
    <div>
      <p>Time: {time}</p>
      <p>Score: {score}</p>
      <h2>{word}</h2>
      {word.split("").map((char,index) => (
      <input id="text" type="text" value={input} onChange={handleInputChange} 
       key={index}
       className={
        index < input.length
        ? input[index] === char
          ? "correct"
          : "incoreect"
        : ""
       }
       />
      ))}
    </div>
  )
}

export default Typingdisplay