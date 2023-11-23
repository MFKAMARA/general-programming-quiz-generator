const quizzes = [
    {
        question: "What does HTML stand for?",
        options:[" Hyperlink and Text Markup Language",
        "Hyper Transfer Markup Language",
        "HyperText Markup Language",
        "High-Level Text Markup Language"],
        answer: "HyperText Markup Language"
    },
    {
        question: "Which HTML tag is used for creating an ordered list?",
        options:["<ul>",
        "<ol>",
        "<li>",
        "<dl>"],
        answer: "<ol>"
    },
    {
        question: "What does the 'alt' attribute in the <img> tag provide?",
        options:["Image source", "Image alignment",
        "Alternative text for the image",
        " Image height"],
        answer: "Alternative text for the image"
    },
    {
        question: "Which property is used to change the text color in CSS?",
        options:["text-color",
        "color",
        "font-color",
        "text-style"],
        answer: "color"
    },
    {
        question: "What does CSS stand for?",
        options:["Cascading Style Sheet",
        "Computer Style Sheet",
        "Creative Style Sheet",
        "Colorful Style Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "How can you include an external CSS file in an HTML document?",
        options:["<link rel='stylesheet' type='text/css' href='style.css'>","<style src='style.css'>",
        "<css file='style.css'>",
        "<script type='text/css' src='style.css'>"], 
        answer: "<link rel='stylesheet' type='text/css' href='style.css'>"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options:["var", "int",
        "string",
        "Variable"],
        answer: "Var"
    },
    {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        options:["To add a new HTML element",
        "To create a function",
        "To attach an event handler to an element",
        "To link external JavaScript files"],
        answer: "To attach an event handler to an element"
    },
    {
        question: "What does the 'typeof' operator in JavaScript return for an array?",
        options: [ "object","array", "number", "string"],
        answer: "object"
    },
    {
        question: "Which API provides functionality for making HTTP requests in JavaScript?",
        options: ["DOM API", "AJAX API", "JSON API", "Fetch API"],
        answer: "Fetch API"
    },
    { 
        question: "What does CORS stand for in the context of web development?",
        options:[ "Cross-Origin Resource Sharing", "Cascading Order of Resources", "Cross-Origin Request Security", "Centralized Origin Resource Sharing"],
        answer: "Cross-Origin Resource Sharing"
    },
    {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        options:["To make an asynchronous request",
        "To make an asynchronous request",
        "To make an asynchronous request",
        "To make an asynchronous request"],
        answer: "To make an asynchronous request"
    },
    {
        question: "What HTML tag is used to include the JavaScript code directly in the HTML file?",
        options:["<script type='text/javascript' src='script.js'>",
        "<script src='script.js'>",
        "<script type='text/javascript' src='script.js'>",
        "<script type='text/javascript' src='script.js'>"],
        answer: "<script type='text/javascript' src='script.js'>"
    },
    {
        question: "What programming language is commonly used for client-side web development?",
        options:["HTML", "CSS", "JavaScript", "PHP"],
        answer: "javaScript"
    },
    {
        question: "What does the acronyms API stand for?",
        options:["Application Programming Interface",
        "Application Programming Interface",
        "Application Programming Interface",
        "Application Programming Interface"],
        answer: "Application Programming Interface"
    },
    {
        question: "Which HTML tag is used for creating a hyperlink?",
        options:["<a>",
        "<a>",
        "<a>",
        "<a>"],
        answer: "<a>"
    },
    {
        question: "What is the purpose of the CSS 'box-model'?",
        options:["To define the dimensions of an element",
        "To define the dimensions of an element",
        "To define the dimensions of an element",
        "To define the dimensions of an element"],
        answer: "To define the dimensions of an element"

    },
    {
        question: "In JavaScript, what is the purpose of the 'localStorage' object?",
        options:["To store data on the server",
        "To store data on the client-side",
        "To store data in the browser",
        "To store data in the browser"],
        answer: "To store data on the client-side"
    },
];

let currentQuestionIndex = 0; 
let score = 0;
let timeLeft = 60;
let timerInterval;


function startQuiz() {
    document.getElementById("start-quiz").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuiz();
    startTimer();

}

function displayQuiz() {
    const quizBox = document.getElementById("quiz-box");
    const optionsContainer = document.getElementById("options-container");
    quizBox.textContent = quizzes[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    quizzes[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);  
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizzes[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score += 5;
    } else {
        timeLeft -= 10;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizzes.length) {
        displayQuiz();
    } else {
        endQuiz();
    }
}


function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
        timeLeft--;
    }, 1000);
}

