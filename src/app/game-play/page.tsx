import React from 'react'
import Answercount from '../components/playGame/Answercount';
import Timescount from '../components/playGame/Timescount';
import Typingdisplay from '../components/playGame/Typingdisplay';
import Chooseanswer from '../components/playGame/Chooseanswer';



const Gameplay = () => {
  return (
    <main>
        <div>
            <div>
                <Answercount />
                <Timescount  />
                <Typingdisplay />
                <Chooseanswer />
            </div>
        </div>
    </main>
  );
}

export default Gameplay