
const startPageEl = document.querySelector(".start-page");
const timeElement = document.querySelector("#time");
const wrapperElement = document.querySelector(".wrapper");
const btnElement = document.querySelector("#start");
const divContEL = document.querySelector(".divContainer");
const h3Element = document.querySelector("#title");
const olEl = document.querySelector("#questlist");
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