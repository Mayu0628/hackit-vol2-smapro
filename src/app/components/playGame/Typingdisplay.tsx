import React, { useState, useEffect } from 'react';


const Typingdisplay = () => {
  
  const [word, setWord] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [score, setScore] = useState<string>('');
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
    const newWord = 'This is a pen.';
    newWord
    setWord(newWord);
    setInput('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInput(userInput);
    let separateWord = word.split("");
    if (!gameover) {
      for(let i=0; i<separateWord.length;i++){
        if (userInput === separateWord[i]) {
          document.getElementById("text")!.style.backgroundColor = "white";
          setScore(score + 10);
          generateNewWord();
        }else {
          document.getElementById("text")!.style.backgroundColor = "pink";
          setTime(time -1);
        }
      }
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
      <input id="text" type="text" value={input} onChange={handleInputChange} />
    </div>
  )
}

export default Typingdisplay