(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[ letter ]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [{
      question: 'What is the "official" name of the Cheese Mines?',
      answers: {
        a: 'There is no official name',
        b: 'This a government conspiracy',
        c: 'Government Cheese',
      },
      correctAnswer: 'c'
    },
    {
      question: 'Why was the reason it started?',
      answers: {
        a: 'surplus of milk?',
        b: 'funnsies',
        c: 'IT IS A CONSPIRACY!!!',
      },
      correctAnswer: 'a'
    },
    {
      question: 'When did it start?',
      answers: {
        a: '1949',
        b: '1970s',
        c: 'World War II to the early 1980s',
      },
      correctAnswer: 'c'
    },
    {
      question: 'Are they actually cheese mines?',
      answers: {
        a: 'No they are just warehouses',
        b: 'THE GOVERNMENT IS LYING! THERE ARE MINES! BUT FULL OF SECRET WEAPONS!',
        c: 'IT IS A GOVERNMENT COVER UP!',

      },
      correctAnswer: 'a'
    },
    {
      question: 'Why are they called Cheese Mines?',
      answers: {
        a: 'Because people thought it was funny',
        b: ' 🤷🏻‍♀️',
        c: 'SO THE GOVERNMENT COULD HIDE THE TRUTH! 👾',
      },
      correctAnswer: 'a'
    },
    {
      question: 'What is in it?',
      answers: {
        a: 'Dunno. Gouda or Cheddar probably',
        b: 'THEY ARE TRYING TO POISON US!!!',
        c: 'According to wikipedia: "it consists of a variety of cheese types and other ingredients, such as emulsifiers, blended together... " ',
      },
      correctAnswer: 'c'
    },
    {
      question: 'How many pounds could a state ask for?',
      answers: {
        a: '10 million pounds (4535.9237 metric tons)',
        b: 'THERE IS NO WAY THE GOVERNMENT WOULD DO THAT! IT IS ALL LIE!',
        c: '30 million pounds (13607.7711 metric tons)',
      },
      correctAnswer: 'c'
    }
  ]

  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();