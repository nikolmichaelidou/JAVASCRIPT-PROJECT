function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer) {
		// code will go here
		var output = [];
		var answers;
	}

	function showResults(questions, quizContainer, resultsContainer) {
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function () {
		showResults(questions, quizContainer, resultsContainer);
	}
}
var myQuestions = [
	{
		question: 'What is the "official" name of the Cheese Mines?',
		answers: {
			a: 'There is no official name',
			b: 'This a goverment conspiracy',
			c: 'Goverment Cheese',
		},
		correctanswer: 'c'
	},
	{
		question: 'Why was the reason it started?',
		answers: {
			a: 'slurplus of milk?',
			b: 'funnsies',
			c: 'IT IS A CONSPIRACY!!!',
		},
		correctanswer: 'a'
	},
	question: 'When did it start?',
	answers: {
		a: '1949',
		b: '1970s',
		c: ' World War II to the early 1980s',
	},
	correctanswer: 'c'
}
]