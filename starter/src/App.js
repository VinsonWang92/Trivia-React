import React, { useState } from 'react';
import photo1 from './images/1.JPG';
import photo2 from './images/2.JPG'
import photo3 from './images/3.JPG'
import photo14 from './images/14.JPG'
import photo15 from './images/15.JPG'
import photo18 from './images/18.jpg'
import photo16 from './images/16.JPG'
import photo8 from './images/8.JPG'
import photo6 from './images/6.JPG'
import photo19 from './images/19.jpg'
import photo9 from './images/9.JPG'
import photo26 from './images/26.jpg'

export default function App() {
	const questions = [
		{
			questionText: 'What date did we first see each other again at Strathfield',
			image: photo9,
			answerOptions: [
				{ answerText: '28/3/2019', isCorrect: true },
				{ answerText: '27/3/2019', isCorrect: false },
				{ answerText: '26/3/2019', isCorrect: false },
				{ answerText: '29/3/2019', isCorrect: false },
			],
		},
		{
			questionText: 'What was the name of the restaurant we ate at that day',
			image: photo2,
			answerOptions: [
				{ answerText: 'Belly Bao', isCorrect: false },
				{ answerText: 'Dumplingo', isCorrect: false },
				{ answerText: 'Mandoo', isCorrect: true },
				{ answerText: 'Ho Jiaks', isCorrect: false },
			],
		},
		{
			questionText: 'Where did we eat on our second date?',
			image: photo3,
			answerOptions: [
				{ answerText: 'Belly Bao', isCorrect: false },
				{ answerText: 'Pumpkin', isCorrect: false },
				{ answerText: 'La Disfida', isCorrect: true },
				{ answerText: 'Mandoo', isCorrect: false },
			],
		},
		{
			questionText: 'What was the name of the escape room we completed on our third date?',
			image: photo1,
			answerOptions: [
				{ answerText: 'Labyrinth', isCorrect: false },
				{ answerText: 'Escape Hunt', isCorrect: false },
				{ answerText: 'Elude', isCorrect: false },
				{ answerText: 'The Cipher Room', isCorrect: true },
			],
		},
		{
			questionText: 'Where did we meet on our fourth date?',
			image: photo19,
			answerOptions: [
				{ answerText: 'Palm Beach', isCorrect: false },
				{ answerText: 'Leichardt', isCorrect: false },
				{ answerText: 'Summer Hill', isCorrect: false },
				{ answerText: 'Pumpkin', isCorrect: true },
			],
		},
		{
			questionText: 'What was the name of the comedian we saw on our Palm Beach date?',
			image: photo6,
			answerOptions: [
				{ answerText: 'Ronny Chieng', isCorrect: false },
				{ answerText: 'Aaron Chen', isCorrect: false },
				{ answerText: 'Ronnie Chieng', isCorrect: false },
				{ answerText: 'Jason Leong', isCorrect: true },
			],
		},
		{
			questionText: 'What was the first movie we watched together?',
			image: photo8,
			answerOptions: [
				{ answerText: 'Spider-Man: Into the Spider-Verse', isCorrect: true },
				{ answerText: 'Wreck-It Ralph 2', isCorrect: false },
				{ answerText: 'Green Book', isCorrect: false },
				{ answerText: 'A Star is Born', isCorrect: false },
			],
		},
		{
			questionText: 'Where did we go for your first Birthday together?',
			image: photo16,
			answerOptions: [
				{ answerText: 'La Disfida', isCorrect: false },
				{ answerText: 'Gold Coast', isCorrect: true },
				{ answerText: 'Lilianfels', isCorrect: false },
				{ answerText: 'Taronga Zoo', isCorrect: false },
			],
		},
		{
			questionText: 'Which theme park did we go to first there?',
			image: photo15,
			answerOptions: [
				{ answerText: 'Movie World', isCorrect: true },
				{ answerText: 'Sea World', isCorrect: false },
				{ answerText: 'Dream World', isCorrect: false },
				{ answerText: 'Wet N Wild', isCorrect: false },
			],
		},
		{
			questionText: 'What was the official date we moved in together?',
			image: photo18,
			answerOptions: [
				{ answerText: '14/12/2019', isCorrect: true },
				{ answerText: '14/12/2020', isCorrect: false },
				{ answerText: '15/12/2020', isCorrect: false },
				{ answerText: '15/12/2019', isCorrect: false },
			],
		},
		{
			questionText: 'What is my nickname for you?',
			image: photo26,
			answerOptions: [
				{ answerText: 'Bubba', isCorrect: true },
				{ answerText: 'Bubbala', isCorrect: true },
				{ answerText: 'Bubbaji', isCorrect: true },
				{ answerText: 'Bubbaza', isCorrect: true },
			],
		},
		{
			questionText: 'Who loves you more than anyone in the world?',
			image: photo14,
			answerOptions: [
				{ answerText: 'Bubby', isCorrect: true },
				{ answerText: 'Vinson', isCorrect: true },
				{ answerText: 'Your parents', isCorrect: false },
				{ answerText: 'Yunsi', isCorrect: false },
			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [score, setScore] = useState(0)

	const resetQuiz = () => {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0)
	} 
	
	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1)
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			} else {
			setShowScore(true)
			};
		}else {
			alert("How could you get this wrong! Try again Bubba!")
		}	
	};

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div>
					<div className='score-section'>You got all the questions correct! Combination for the safe is 020521</div>
					<button onClick={resetQuiz}>Start Again</button>
				</div>
			) : (
				<div className="box">
					<div>
						<img className="photo" src={questions[currentQuestion].image} />
					</div>
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<div>
							<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							</div>
						))}
					</div>
				</>
				</div>
			)}
		</div>
	);
}
