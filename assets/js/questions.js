var pos = 0; 
var correct = 0;
var question = "";
var choice = "";
var choices = "";
var chA = "";
var chB = "";
var chC = "";
var chD = "";

// Quiz questions, choices and answer key

var questions = [
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: [
            "a. You should not use any of the JavaScript reserved keyword as variable name.",
            "b. JavaScript variable names should not start with a numeral (0-9).",
            "c. Both of the above",
            "d. None of the above",
        ],
        answer: "c. Both of the above.",
    },
    {
        question: "Can you pass a anonymous function as an argument to another function?",
        choices: [
            "a. True",
            "b. False",
        ],
        answer: "a. True",
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: [
            "a. Storing numbers, dates, or other values",
            "b. Varying randomly",
            "c. Causing high-school algebra flashbacks",
            "d. None of the above",
        ],
        answer: "a. Storing numbers, dates, or other values",
    },
    {
        question: "Which built-in method returns the string representation of the number's value?",
        choices: [
            "a. toValue()",
            "b. toNumber()",
            "c. toString()",
            "d. None of the above",
        ],
        answer: "c. toString()",
    },
    {
        question: "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
        choices: [
            "a. unshift()",
            "b. sort()",
            "c. splice()",
            "d. toString()",
        ],
        answer: "a. unshift()",
    },
    {
        question: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
        choices: [
            "a. sup()",
            "b. strike()",
            "c. sub()",
            "d. small()",
        ],
        answer: "b. strike()",
    },
    {
        question: "Which of the following can't be done with client-side JavaScript?",
        choices: [
            "a. Validating a form",
            "b. Sending a form's contents by email",
            "c. Storing the form's contents to a database file on the server",
            "d. None of the above",
        ],
        answer: "c. Storing the form's contents to a database file on the server",
    },
    {
        question: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
        choices: [
            "a. anchor()",
            "b. blink()",
            "c. italics()",
            "d. big()",
        ],
        answer: "d. big()",
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements",
        choices: [
            "a. <SCRIPT>",
            "b. <BODY>",
            "c. <HEAD>",
            "d. <TITLE>",
        ],
        answer: "a. <SCRIPT>",
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        choices: [
            "a. global variable",
            "b. local variable",
            "c. Both of the above.",
            "d. None of the above.",
        ],
        answer: "a. global variable",
    },
    {
        question: "JavaScript entities start with _______ and end with _________.",
        choices: [
            "a. Semicolon, colon",
            "b. Semicolon, Ampersand",
            "c. Ampersand, colon",
            "d. Ampersand, semicolon",
        ],
        answer: "d. Ampersand, semicolon",
    },
]