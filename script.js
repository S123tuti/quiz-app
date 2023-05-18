const container = document.querySelector('.container');
const questionsBox = document.querySelector('.questions');
const choicesBox = document.querySelector('.choices');
const nextbtn = document.querySelector('.nextBtn');
const scorecard = document.querySelector('scorecard')
const quiz = [
    {
questions:"Q. ____ is an interactive shell that processes Node?",
choices: ["REPL", "REAL", "RESP", "None of the above"],
answer: "REPL"
    },
    {
questions:"Q. Node.js is written in which language??",
choices: ["C++", "Javascript", "C", "Java"],
answer: "Javascript"
    },
    {
questions:"Q. Which of the following are examples of node modules?",
choices: ["Express", "Body-parser", "Socket.io", "All of the above"],
answer: "All of the above"
    },
    {
questions:"Q. To include the HTTP server in the node module, what function do we use?",
choices: ["get()", "require()", "createServer()", "None of the above"],
answer: "require()"
    },
    {
questions:"Q. How can we initiate a NodeJS file called Hello in Node?",
choices: ["Hello,js", "node Hello.js", "Javascript Hello.js", "node Hello"],
answer: "node Hello.js"
    },

];

let currentQuestionIndex = 0;
let score = 0;

const showQuestions = ()=>{

    const questionDetails = quiz[currentQuestionIndex]
    questionsBox.textContent = questionDetails.questions

    choicesBox.textContent = "";
    for(let i=0; i<questionDetails.choices.length; i++){
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choices')
        choicesBox.appendChild(choiceDiv) 

        choiceDiv.addEventListener('click',()=>{
            if(choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected')
            }else{
                choiceDiv.classList.add('selected')
            }
        })
    }
}

// function to check answers
const checkAnswer = () =>{
const selectedchoice = document.querySelector('.choice.selected')
// console.log(selectedchoice);
if(selectedchoice.textContent === quiz[currentQuestionIndex].answer){
    alert("correct ans")
    score++
}
else{
    alert("wrong ans")
}
}
// function to show score 
const showScore = ()=>{
    scorecard.textContent = `You Scored ${score} out of ${quiz.length}`;
}
showQuestions();
nextbtn.addEventListener('click', () =>{
if(currentQuestionIndex < quiz.length){
    currentQuestionIndex++;
    showQuestions();
}
else{
    showScore();
}
});


   

