import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import photo1 from "./images/1.JPG";
import photo2 from "./images/2.JPG";
import photo3 from "./images/3.JPG";
import photo14 from "./images/14.JPG";
import photo15 from "./images/15.JPG";
import photo18 from "./images/18.jpg";
import photo16 from "./images/16.JPG";
import photo8 from "./images/8.JPG";
import photo6 from "./images/6.JPG";
import photo19 from "./images/19.jpg";
import photo9 from "./images/9.JPG";
import photo26 from "./images/26.jpg";
import photo12 from "./images/12.JPG";
import photo13 from "./images/13.JPG";
import photo7 from "./images/7.JPG";
import photo10 from "./images/10.JPG";
import photo17 from "./images/17.jpg";
import photo20 from "./images/20.jpg";
import photo21 from "./images/21.jpg";
import photo22 from "./images/22.jpg";
import photo23 from "./images/23.jpg";
import photo25 from "./images/25.jpg";
import photo5 from "./images/5.JPG";
import photo11 from "./images/11.JPG";
import styles from "./index.css";
import classNames from "classnames";
import final from "./images/final.JPG"

export default function App() {
  const questions = [
    {
      questionText:
        "What date did we first see each other again at Strathfield",
      image: photo9,
      answerOptions: [
        { answerText: "28/3/2019", isCorrect: true },
        { answerText: "27/3/2019", isCorrect: false },
        { answerText: "26/3/2019", isCorrect: false },
        { answerText: "29/3/2019", isCorrect: false },
      ],
    },
    {
      questionText: "What was the name of the restaurant we ate at that day",
      image: photo2,
      answerOptions: [
        { answerText: "Belly Bao", isCorrect: false },
        { answerText: "Dumplingo", isCorrect: false },
        { answerText: "Mandoo", isCorrect: true },
        { answerText: "Ho Jiaks", isCorrect: false },
      ],
    },
    {
      questionText: "Where did we eat on our second date?",
      image: photo3,
      answerOptions: [
        { answerText: "Belly Bao", isCorrect: false },
        { answerText: "Pumpkin", isCorrect: false },
        { answerText: "La Disfida", isCorrect: true },
        { answerText: "Mandoo", isCorrect: false },
      ],
    },
    {
      questionText:
        "What was the name of the escape room we completed on our third date?",
      image: photo1,
      answerOptions: [
        { answerText: "Labyrinth", isCorrect: false },
        { answerText: "Escape Hunt", isCorrect: false },
        { answerText: "Elude", isCorrect: false },
        { answerText: "The Cipher Room", isCorrect: true },
      ],
    },
    {
      questionText: "Where did we meet on our fourth date?",
      image: photo19,
      answerOptions: [
        { answerText: "Palm Beach", isCorrect: false },
        { answerText: "Leichardt", isCorrect: false },
        { answerText: "Summer Hill", isCorrect: false },
        { answerText: "Pumpkin", isCorrect: true },
      ],
    },
    {
      questionText:
        "What was the name of the comedian we saw on our Palm Beach date?",
      image: photo6,
      answerOptions: [
        { answerText: "Ronny Chieng", isCorrect: false },
        { answerText: "Aaron Chen", isCorrect: false },
        { answerText: "Ronnie Chieng", isCorrect: false },
        { answerText: "Jason Leong", isCorrect: true },
      ],
    },
    {
      questionText: "What was the first movie we watched together?",
      image: photo8,
      answerOptions: [
        { answerText: "Spider-Man: Into the Spider-Verse", isCorrect: true },
        { answerText: "Wreck-It Ralph 2", isCorrect: false },
        { answerText: "Green Book", isCorrect: false },
        { answerText: "A Star is Born", isCorrect: false },
      ],
    },
    {
      questionText: "Where did we go for your first Birthday together?",
      image: photo16,
      answerOptions: [
        { answerText: "La Disfida", isCorrect: false },
        { answerText: "Gold Coast", isCorrect: true },
        { answerText: "Lilianfels", isCorrect: false },
        { answerText: "Taronga Zoo", isCorrect: false },
      ],
    },
    {
      questionText: "Which theme park did we go to first there?",
      image: photo15,
      answerOptions: [
        { answerText: "Movie World", isCorrect: true },
        { answerText: "Sea World", isCorrect: false },
        { answerText: "Dream World", isCorrect: false },
        { answerText: "Wet N Wild", isCorrect: false },
      ],
    },
    {
      questionText: "What was the official date we moved in together?",
      image: photo18,
      answerOptions: [
        { answerText: "14/12/2019", isCorrect: true },
        { answerText: "14/12/2020", isCorrect: false },
        { answerText: "15/12/2020", isCorrect: false },
        { answerText: "15/12/2019", isCorrect: false },
      ],
    },
    {
      questionText: "What is my nickname for you?",
      image: photo26,
      answerOptions: [
        { answerText: "Bubba", isCorrect: true },
        { answerText: "Bubbala", isCorrect: true },
        { answerText: "Bubbaji", isCorrect: true },
        { answerText: "Bubbaza", isCorrect: true },
      ],
    },
    {
      questionText: "Who loves you more than anyone in the world?",
      image: photo14,
      answerOptions: [
        { answerText: "Bubby", isCorrect: true },
        { answerText: "Vinson", isCorrect: true },
        { answerText: "Your parents", isCorrect: false },
        { answerText: "Yunsi", isCorrect: false },
      ],
    },
  ];

  const story = [
    {
      image: photo12,
      storyText:
        "It was our first meeting since high school and I was really excited! You looked beautiful in your checkered skirt, blue sweater and glasses!",
    },
    {
      image: photo13,
      storyText:
        "After Mandoo we had dessert at the Smelly Cheesecake all the way to closing and then you dropped me off at my car because I walked there from work to make sure I would not be late",
    },
    {
      image: photo10,
      storyText:
        "We went to Leichardt that day and I was fully overdressed! My car was also sparkling clean which left an impression on my bubba",
    },
    {
      image: photo11,
      storyText:
        "We ate at Belly Bao, kinda completed the escape room on time and Bubba drove me home :D:D",
    },
    {
      image: photo20,
      storyText:
        "this was a tough one! I pushed my luck and asked to see you again after going to the gym thinking you'd say no but you did not! Your hair was still wet and we had a nice little chat at Pumpking, was raining that night too.",
    },
    {
      image: photo5,
      storyText:
        "We went to catch the sunrise at Palm Beach, just like today! Then we walked Chad, I drove you home whilst you napped and I wandered around Ashfield til it was time to go to dinner and the show at night, Bubba didn't know I wanted to hang the entire time! This was also the first time I was going to try hold Bubba's hand but she did not give me the opportunity",
    },
    {
      image: photo23,
      storyText:
        "We watched both Wreck-It Ralph 2 and Spiderman but we watched spiderman first, held my Bubba's hand for the first time and made her salmon fettucini for dinner",
    },
    {
      image: photo17,
      storyText:
        "We went to the Gold Coast for your birthday and it was our first plane trip together and it was super exciting. The hotel was awesome, we had a private spa tub, ate at a nice restaurant and watched Terminator(best movie)",
    },
    {
      image: photo22,
      storyText:
        "We went to Movie World and Sea world during our trip but Movie World was way better and the rides were super exciting. Lots of fun memories with my Bubba made there",
    },
    {
      image: photo25,
      storyText:
        "We decided to move in together and I was really excited after staying together lots at Summer Hill and hanging at Auburn. We chose our home quickly and we're still there today! Can't wait to get our forever home together but as long as I'm with Bubba I can live anywhere :D",
    },
    {
      image: photo21,
      storyText: "They're all correct! You're my Bubbagucci as well hehe",
    },
    {
      image: photo7,
      storyText:
        "Of Course it's me! I love you more than anything in the world!!",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  const [storyTime, setStoryTime] = useState(false);
  const [animation, setAnimation] = useState(0);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setStoryTime(true);
      setAnimation(0);
    } else {
      alert("How could you get this wrong! Try again Bubba!");
    }
  };

  const nextQuestionHandler = () => {
    setStoryTime(false);
    const nextStory = currentStory + 1;
    setCurrentStory(nextStory);
    setAnimation(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnimate(!animate);
    } else {
      setShowScore(true);
      setCurrentQuestion(0);
      setCurrentStory(0);
    }
  };

  return (
    <div className="app">
      {/* <TransitionGroup>
        <CSSTransition key={animation} timeout={1000} classNames="messageout"> */}
      {showScore ? (
        <div>
          <div className="score-section">
            <img className="photo" src={final} alt="final picture"/>
            Well done Bubba! You got all the questions correct! Combination for the
            safe is 0405
          </div>
          <button onClick={resetQuiz}>Start Again</button>
        </div>
      ) : storyTime ? (
        <div className={animation ? "box" : "box"}>
          <img className="photo" src={story[currentStory].image} />
          <div className="storybox">
            <p>{story[currentStory]?.storyText}</p>
            <button onClick={nextQuestionHandler}>Next Question</button>
          </div>
        </div>
      ) : (
        <div className="box">
          <div>
            <img className="photo" src={questions[currentQuestion].image} />
          </div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <div>
                  <button
                    className={classNames(
                      styles.animate,
                      animate && styles.grow
                    )}
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      )}
      {/* </CSSTransition>
      </TransitionGroup> */}
    </div>
  );
}
