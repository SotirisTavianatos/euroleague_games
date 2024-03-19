import React from "react";
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from "react";
import '.././App.css';
import Question from ".././mycomponents/Question"
import questiondata from '.././questiondata';
import Header from '.././mycomponents/Header';

function Quiz() {
    const navigate = useNavigate(); 
    const [questionToShow, setQuestion] = React.useState()
    const [count, setCount] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [showStart, setShowStart] = React.useState(true);
    const [userAnswer, setuserAnswer] = React.useState(0);
    const [correctAnswer, setcorrectAnswer] = React.useState(-1);

    useEffect(() => {
      if(count>=1){
        if(correctAnswer==userAnswer){
          addScore();
        }
        setQuestion(questions[count-1]);
        }
      if(count==11)
        navigate('/Results',{state:{score}}); 
    }, [count]);

    const toggleStart = () => {
      setShowStart(!showStart);
      clicked();
    };

    function clicked(){
      add();
    }
    function clicked1(){
      setuserAnswer(1);
      setcorrectAnswer(document.getElementById("correctanswer").textContent);
      add();
    }
    function clicked2(){
      setuserAnswer(2);
      setcorrectAnswer(document.getElementById("correctanswer").textContent);
      add();
    }
    function clicked3(){
      setuserAnswer(3);
      setcorrectAnswer(document.getElementById("correctanswer").textContent);
      add();
    }
    function clicked4(){
      setuserAnswer(4);
      setcorrectAnswer(document.getElementById("correctanswer").textContent);
      add();
    }

    function add(){
      setCount(count => count + 1);
    }
    
    function addScore() {
      setScore(score => score + 1)
  }

    var questions=questiondata.map(q => {
      return <Question 
        key={q.id}
        {...q}
        clicked1={() => clicked1()} 
        clicked2={() => clicked2()} 
        clicked3={() => clicked3()} 
        clicked4={() => clicked4()} 
        />
  });
      return (
        <div>
          <Header />
          <div class="row">
              <div class="column side">
                <h2>add</h2>
                <p>this is some add</p>
              </div>

              <div class="column middle">
                <div className="counter--count">
                      <h1>question number {count}/10</h1>
                </div>
                {questionToShow}
                <div class="startbuttoncontainer">
                  {showStart && <button  onClick={toggleStart}>Start quiz!</button>}
                </div>
                <div className="counter--count">
                      <h1>your score: {score}</h1>
                </div>
              </div>

              <div class="column side">
                <h2>different add</h2>
                <p>this is another add</p>
              </div>

          </div>
        </div>
            );
  }
  export default Quiz;