/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

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
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    
    {
     question: "1. Which of following can NOT increase resolution (tick all which applies):",  ///// Write the question inside double quotes
      answers: {
        a: "increasing incident voltage",                  ///// Write the option 1 inside double quotes
        b: "increased vacuum",                  ///// Write the option 2 inside double quotes
        c: "increasing beam spot size",                  ///// Write the option 4 inside double quotes
        d: "decreasing working distance",
        e: "All of the Above",
      },
      correctAnswer: "e"                ///// Write the correct option inside double quotes
    },
    
    {
     question: "2. What is the dark region in this image?<br><img src='images/fig1.PNG'>",  ///// Write the question inside double quotes
      answers: {
        a: "Matrix",                  ///// Write the option 1 inside double quotes
        b: "Reinforcement",
        c: "Grain",
        d: "Porosity",
    
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
    {
     question: "3. What is the dark region in this image?<br><img src='images/fig1a.PNG'>",  ///// Write the question inside double quotes
      answers: {
         a: "Matrix",                  ///// Write the option 1 inside double quotes
        b: "Reinforcement",
        c: "Grain",
        d: "Porosity",
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
    {
     question: "4. What is the estimated matrix phase content in the following image?<br><img src='images/fig2.PNG'>",  ///// Write the question inside double quotes
      answers: {
        a: "30%",                  ///// Write the option 1 inside double quotes
        b: "45%",                  ///// Write the option 2 inside double quotes
        c: "60%",                  ///// Write the option 4 inside double quotes
        d: "75 %",
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
    {
     question: "5. In which case the porosity is of biggest size?<br><img src='images/fig2a.PNG'>",  ///// Write the question inside double quotes
      answers: {
        a: "A",                  ///// Write the option 1 inside double quotes
        b: "B",                  ///// Write the option 2 inside double quotes
        c: "C",                  ///// Write the option 4 inside double quotes
        d: "D",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    {
     question: "6. In which case the porosity content is highest?<br><img src='images/fig2a.PNG'>",  ///// Write the question inside double quotes
      answers: {
        a: "A",                  ///// Write the option 1 inside double quotes
        b: "B",                  ///// Write the option 2 inside double quotes
        c: "C",                  ///// Write the option 4 inside double quotes
        d: "D",
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
    {
     question: "7. In which of the following, the grain size is biggest?<br><img src='images/fig2c.PNG'>",  ///// Write the question inside double quotes
      answers: {
        a: "A",                  ///// Write the option 1 inside double quotes
        b: "B",                  ///// Write the option 2 inside double quotes
        c: "C",                  ///// Write the option 4 inside double quotes
        d: "D",
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
    {
     question: "8. In which of the following, the grain size is smallest:<br><img src='images/fig2d.PNG'>",  ///// Write the question inside double quotes
      answers: {
        a: "A",                  ///// Write the option 1 inside double quotes
        b: "B",                  ///// Write the option 2 inside double quotes
        c: "C",                  ///// Write the option 4 inside double quotes
        d: "D",
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];





/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////