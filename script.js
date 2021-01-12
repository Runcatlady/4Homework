

// set time to complete the quiz 90 seconds
let timer = 90;
let timeLeft;
//Timer function at run as soon as the start button is clicked
function setTimer() {
    timeLeft = setInterval(function() {
        timer--;

        let resetTime = timeElement.textContent = "Time:" + " " + timer;
        timer = timer;

        if (timer <= 0) {
            clearInterval(timeLeft);
            timeElement.textContent = resetTime
        } 

    }, 1000)

}

//  Implementing event listener to start the timer and hide the quiz button and Intro
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setTimer()
        displayQuestions();
    }

})
//declare the index variable for the onclickHandler function
let i = 0;

//Add a function/if else statements to compare the answers and 
// display each question as the buttons are clicked
function onclickHandler(event) {
     
    if(timer<=0){
        clearInterval(timeLeft);
        divContEL.style.display="none";
        displayResult();
    }
    const answerText = event.target.textContent 
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
            
          }, 500)
      
  
          divContEl.innerHTML = '';
       }
    //This is the function to display the users final score 
    function displayResult() {
        finishDiv.style.visibility = "visible";
        timeElement.textContent = "Time:" + " " + timer;
        let HighScores = timer;
        localStorage.getItem(HighScores)
        Score.textContent = "Your finally score is: " + HighScores;
         localStorage.setItem("HighScores", HighScores)
 
    }
}
// this function runs the last page 
function renderLastItem() {
    const yourScore = localStorage.getItem("HighScores");
    const yourInitial = localStorage.getItem("Initial");
     if (yourScore && yourInitial === "") {
        return
    }
    finishDiv.textContent = "";
    const endPageEl = document.querySelector(".end-page");
    endPageEl.style.visibility = "visible";
    const initialAndScore = document.querySelector("#staticEmail");
    initialAndScore.value = yourInitial + ":" + " " + yourScore;

}

// This event listener submits the initial and final score to the local storage 
document.addEventListener("submit", function (event) {
    event.preventDefault();
    const initialInput = document.querySelector("#inputInitial").value;
    if (initialInput === "") {
        errMsg.setAttribute("style", "color: red")
        errMsg.textContent = "Initial input field cannot be empty"
    } else {
        errMsg.textContent = "";
        localStorage.getItem(initialInput)
        localStorage.setItem("Initial", initialInput)
         renderLastItem()
    }

})

//This function will refresh the page and send the user back to the beginning of the page when the 'Go Back' button is clicked
function init() {
    location.reload();

}
//This function clears initials and High Score displayed on the final page 
function clearScore() {
   initialAndScore.value = "";
}


var startPageEl = document.querySelector(".start-page");
var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEl = document.querySelector(".divContainer");
var h3Element = document.querySelector("#title");
var olEl = document.querySelector("#questlist");
const finishDiv = document.querySelector(".finish");
const Score = document.querySelector("#result");
const errMsg = document.querySelector("#error");
const initialInput = document.querySelector("#inputInitial").value;
const submitEl = document.querySelector(".btn btn-primary mb-2");
const responseDiv = document.querySelector("#response");
const endPageEl = document.querySelector(".end-page");
const initialAndScore = document.querySelector("#staticEmail");



// Created questions and put them in an array
const questions = [
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
        title: "When creating an element in JavaScript, which will return an array of elements",
        choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)", 
        "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
        answer: "querySelectorAll()",
    }
]

//Create next questions to be added to the HTML document dynamically
function displayQuestions() {
    var holdQ1Title = questions[i].title
    h3Element.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    olListEl.innerHTML = '';
    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    olListEl.appendChild(liTag1);
    divContEL.appendChild(olListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    olListEl.appendChild(liTag2)
    divContEL.appendChild(olListEl);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    olListEl.appendChild(liTag3)
    divContEL.appendChild(olListEl);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    olListEl.appendChild(liTag4);
    divContEL.appendChild(olListEl);
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}
