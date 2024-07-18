const questions =[
      {
        question: "What is the capital of France?",
        answers: {
          a: { text: "Berlin", isCorrect: false },
          b: { text: "Madrid", isCorrect: false },
          c: { text: "Paris", isCorrect: true },
          d: { text: "Lisbon", isCorrect: false }
        }
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
          a: { text: "Harper Lee", isCorrect: true },
          b: { text: "Mark Twain", isCorrect: false },
          c: { text: "F. Scott Fitzgerald", isCorrect: false },
          d: { text: "Ernest Hemingway", isCorrect: false }
        }
      },
      {
        question: "What is the largest planet in our solar system?",
        answers: {
          a: { text: "Earth", isCorrect: false },
          b: { text: "Jupiter", isCorrect: true },
          c: { text: "Saturn", isCorrect: false },
          d: { text: "Mars", isCorrect: false }
        }
      },
      {
        question: "What is the chemical symbol for water?",
        answers: {
          a: { text: "O2", isCorrect: false },
          b: { text: "H2O", isCorrect: true },
          c: { text: "CO2", isCorrect: false },
          d: { text: "NaCl", isCorrect: false }
        }
      },
      {
        question: "Who painted the Mona Lisa?",
        answers: {
          a: { text: "Vincent van Gogh", isCorrect: false },
          b: { text: "Pablo Picasso", isCorrect: false },
          c: { text: "Leonardo da Vinci", isCorrect: true },
          d: { text: "Claude Monet", isCorrect: false }
        }
      },
      {
        question: "What is the capital of Japan?",
        answers: {
          a: { text: "Beijing", isCorrect: false },
          b: { text: "Seoul", isCorrect: false },
          c: { text: "Tokyo", isCorrect: true },
          d: { text: "Bangkok", isCorrect: false }
        }
      },
      {
        question: "Who discovered penicillin?",
        answers: {
          a: { text: "Marie Curie", isCorrect: false },
          b: { text: "Alexander Fleming", isCorrect: true },
          c: { text: "Louis Pasteur", isCorrect: false },
          d: { text: "Albert Einstein", isCorrect: false }
        }
      },
      {
        question: "What is the square root of 64?",
        answers: {
          a: { text: "6", isCorrect: false },
          b: { text: "7", isCorrect: false },
          c: { text: "8", isCorrect: true },
          d: { text: "9", isCorrect: false }
        }
      },
      {
        question: "Who is the author of 'Harry Potter' series?",
        answers: {
          a: { text: "J.K. Rowling", isCorrect: true },
          b: { text: "J.R.R. Tolkien", isCorrect: false },
          c: { text: "George R.R. Martin", isCorrect: false },
          d: { text: "C.S. Lewis", isCorrect: false }
        }
      },
      {
        question: "What is the smallest prime number?",
        answers: {
          a: { text: "0", isCorrect: false },
          b: { text: "1", isCorrect: false },
          c: { text: "2", isCorrect: true },
          d: { text: "3", isCorrect: false }
        }
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: {
          a: { text: "Venus", isCorrect: false },
          b: { text: "Mars", isCorrect: true },
          c: { text: "Jupiter", isCorrect: false },
          d: { text: "Saturn", isCorrect: false }
        }
      },
      {
        question: "What is the longest river in the world?",
        answers: {
          a: { text: "Amazon", isCorrect: false },
          b: { text: "Nile", isCorrect: true },
          c: { text: "Yangtze", isCorrect: false },
          d: { text: "Mississippi", isCorrect: false }
        }
      }
    ];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = '<i class="ri-arrow-right-fill"></i>';
    // backButton.innerHTML = '<i class="ri-arrow-left-fill"></i>';
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    Object.values(currentQuestion.answers).forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.isCorrect){
            button.dataset.isCorrect = answer.isCorrect;
        }
        button.addEventListener("click", selectAnswer);
    });
}


 function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const slectedBtn = e.target;
    const Correct = slectedBtn.dataset.isCorrect ==="true";
    if(Correct){
        slectedBtn.classList.add("correct");
        score++;
    }
    else{
        slectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.isCorrect === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
    // backButton.style.display ="block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = '<i class="ri-restart-line"></i>';
    nextButton.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }
 

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 })

//  function previousQuestion() {
//     if (currentQuestionIndex > 0) {
//       currentQuestionIndex--;
//       showQuestion();
//     }
//   }
//   backButton.addEventListener("click", previousQuestion);



startQuiz()

  