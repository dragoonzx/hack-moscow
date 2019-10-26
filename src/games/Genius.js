import React, { useState, useEffect } from "react";
import Header from "../Header";
import ModalWindow from "../modules/ModalWindow";

//event listeners

export default function Genius() {
	let sourceFile = "https://api.myjson.com/bins/2rm5b";

	const [questions, setQuestions] = useState({});
	useEffect(() => {
		async function loadQuestion() {
			let data = await (await fetch(sourceFile)).json();
			setQuestions(data);
		}
		loadQuestion();
	}, []);
	const [isGoodModalOpen, toggleGoodModal] = React.useState(false);
	const [isBadModalOpen, toggleBadModal] = React.useState(false);
	const openGoodModal = () => {
		toggleGoodModal(true);
	};
	const openBadModal = () => {
		toggleBadModal(true);
	};
	const closeGoodModal = () => {
		toggleGoodModal(false);
	};
	const closeBadModal = () => {
		toggleBadModal(false);
	};
	function sendAnswer(index) {
		if (quiz.correct == index) {
			openGoodModal();
		} else {
			openBadModal();
		}
	}
	const [page, setPage] = useState(0);
	const nxtPage = () => {
		setPage(page + 1);
		closeBadModal();
		closeGoodModal();
	};
	const prvPage = () => {
		if (page > 0) setPage(page - 1);
		closeBadModal();
		closeGoodModal();
	};
	const [quiz, setQuiz] = useState({
		question: "What Barks",
		answers: ["Cats", "Dogs", "Birds", "Elephants"],
		correct: 1
	});
	const [isOver, setOver] = useState(false);
	useEffect(() => {
		if (questions[page] != undefined) {
			function quizBuilder(page) {
				setQuiz(questions[page]);
			}
			quizBuilder(page);
		}
		if (page >= questions.length) {
			setOver(true);
		}
	}, [page]);

	console.log(quiz);
	return (
		<div>
			<ModalWindow isOpen={isGoodModalOpen} onClose={closeGoodModal}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					className="mainText"
				>
					Good works!!
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<button
						style={{ margin: "30px" }}
						className="primary-button"
						onClick={() => prvPage()}
					>
						Previous
					</button>
					<button
						style={{ margin: "30px" }}
						className="primary-button"
						onClick={() => nxtPage()}
					>
						Next
					</button>
				</div>
			</ModalWindow>
			<ModalWindow isOpen={isBadModalOpen} onClose={closeBadModal}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
					className="mainText"
				>
					Bad works!!
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<button
						style={{ margin: "30px" }}
						className="primary-button"
						onClick={() => prvPage()}
					>
						Previous
					</button>
					<button
						style={{ margin: "30px" }}
						className="primary-button"
						onClick={() => nxtPage()}
					>
						Next
					</button>
				</div>
			</ModalWindow>
			<Header></Header>
			<div className="visual-data">
				<h2 className="h2-visual" style={{ textAlign: "center" }}>
					{quiz.question}
				</h2>
			</div>
			<div>
				<div>
					{isOver ? (
						<div className="genius-quest">
							<h2 className="h2-text">Спасибо за игру!</h2>
						</div>
					) : (
						<div className="genius-quest">
							<div>
								{quiz.answers.map((data, index) => (
									<ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
										<div
											className="question-buttons"
											onClick={() => sendAnswer(index)}
										>
											<li className="p-questions">{data}</li>
										</div>
									</ul>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
