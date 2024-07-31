const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Srilanka", correct: false},
        ]
    },
    {
        question: "Who was the last king of Nepal?",
        answers: [
            {text: "Mahendra", correct: false},
            {text: "Birendra", correct: false},
            {text: "Gyanendra", correct: true},
            {text: "Rajendra", correct: false},
        ] 
    },
    {
        question: "Who is the first president of Nepal?",
        answers: [
            {text: "Prachanda", correct: false},
            {text: "Oli", correct: false},
            {text: "Ram Baran Yadav", correct: true},
            {text: "Deuwa", correct: false},
        ]   
    },
    {
        question: "Who is the first lady president of Nepal?",
        answers: [
            {text: "Anuradha Koirala", correct: false},
            {text: "Sushila Karki", correct: false},
            {text: "Bidhya Devi Bhandari", correct: true},
            {text: "Himani Saha", correct: false},
        ]   
    },
    {
        question: "Who is the best football player in the world?",
        answers: [
            {text: "Maradona", correct: false},
            {text: "Messi", correct: false},
            {text: "Pele", correct: false},
            {text: "All of Them", correct: true},
        ]   
    },
    {
        question: "Who was the first Nepali to use the word ‘Jai Nepal’?",
        answers: [
            {text: "Dasarath Chand", correct: false},
            {text: "Dharma Bhakta Mathema", correct: false},
            {text: "Gangalal", correct: false},
            {text: "Sukra Raj Shastri", correct: true},
        ]   
    },
    {
        question: "Which is Nepal’s first highway ?",
        answers: [
            {text: "Tribhuwan Highway", correct: true},
            {text: "Prithvi Highway", correct: false},
            {text: "B.P. Highway", correct: false},
            {text: "Araniko Highway", correct: false},
        ]     
    },
    {
        question: "How many years do the Chief Justice and other Supreme Court justices hold office until they are of age ?",
        answers: [
            {text: "68 Years", correct: false},
            {text: "65 Years", correct: true},
            {text: "66 Years", correct: false},
            {text: "67 Years", correct: false},
        ]     
    },
    {
        question: "When was the Manakamana Kewalcar operated ?",
        answers: [
            {text: "B.S. 2055 Magh 8", correct: false},
            {text: "B.S. 2055 Mansir 8", correct: true},
            {text: "B.S. 2055 Poush 8", correct: false},
            {text: "B.S. 2055 Falgun 8", correct: false},
        ]     
    }


];


const questoinElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questoinElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}




function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}



function showScore(){
    resetState();
    questoinElement.innerHTML = `You Scored ${score} Out Of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
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
    }else{
        startQuiz();
    }
});



startQuiz();
