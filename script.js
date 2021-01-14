let timer = 90;
var timeLeft;
//Timer funtion that will run as soon as the start button is clicked
function setTimer() {
    timeLeft = setInterval(function () {
        timer--;
        var timeReset = timeEl.textContent = "Time:" + " " + timer;
       timer = timer;
        if (timer <= 0) {         
            clearInterval(timeLeft);
              
            timeEl.textContent = timeReset;
             
        }
    }, 1000)
}
// Implementing the event listener that will start the timer and hide the quiz button and first page
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        introElement.style.display = "none";
        setTimer()
        displayQuestions();
    }

})

 
//declare the index variable for the onclickHandler function
let i = 0;

//Add a function and if/else statement to compare the answers
// display each question when the buttons are clicked
function onclickHandler(event) {
     
    if(timer<=0){
        clearInterval(timeLeft);
        questContEl.style.display="none";
        displayResult();
    }
    var answerText = event.target.textContent 
    if (answerText === questions[i].answer) {
        timer = timer;
        responseDiv.setAttribute("style", "color: green")
        responseDiv.textContent = "Correct";
    } else {

        responseDiv.setAttribute("style", "color: red")
        responseDiv.textContent = "Incorrect";
        timer = timer - 10;
     }
    
      
     
    if (i < questions.length-1) {

      i++;

      setTimeout(function () {
      displayQuestions();
      responseDiv.textContent = "";
    }, 1000)
    }else {
        setTimeout(function () {
            responseDiv.textContent = "";
            displayResult();
            clearInterval(timeLeft);
          
        }, 800)
    

        questContEl.innerHTML = '';
     }
     
   
}
 

//This function clears the initials and the High Score displayed on the final page 
function clearScore() {
    initialsScore.value = "";
}
 
var responseDiv = document.querySelector("#response");
var firstPageEl = document.querySelector("main-page");
var introElement = document.querySelector(".intro");
var btnElement = document.querySelector("#start");
var questContEl = document.querySelector(".questContainer");
var headEl = document.querySelector("#title");
var olListEl = document.querySelector("#questList");
var timeEl = document.querySelector("#time");
var finishDiv = document.querySelector(".finished");
var finalScore = document.querySelector("#result");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-success mb-2");
var finalPageEl = document.querySelector(".final-page");
var initialsScore = document.querySelector("#staticEmail");

var questions = [
    {
        title: "Which is considered a function",
        choices: ["setTimer()", "var headEl = document.querySelector", "()setTimer", ".setAttribute"],
        answer: "setTimer()",
    },
    {
        title: "What does HTML stand for?",
        choices: ["HyperText Mode Language", "HyperText Markup Language", "HyperText Modern Language", "HyperText Markup Line"],
        answer: "HyperText Markup Language",
    },
    {
        title: "When applying forms on your webpage, what should always be added into the code?",
        choices: ["clearInterval", "event.preventDefault", "the DOM", "querySelector.form"],
        answer: "event.preventDefault",
    },
    {
        title: "What does CSS stand for?",
        choices: ["Color Style Sheet", "Cascading Style Sheet", "Contact Style Sheet", "Computer Solving System"],

        answer: "Cascading Style Sheet",
    },
    {   
        title: "HTML element that can be accessed in a Javascript code: Choose which will return an array of elements",
        choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)", 
        "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
        answer: "querySelectorAll()",
    }
]

