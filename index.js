//creating random number from 1-10 first number//
const num1 = Math.ceil(Math.random() * 10);
//creating random number from 1-10 second number//
const num2 = Math.ceil(Math.random() * 10);

//munipulating header using h1 id tag using question//
const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

//munipulates text in header h1 to change had to add HTMLElement = to original to get the numbers to show on page.use backtick not commas//
questionEl.innerText = `What is ${num1} Multiplyed by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }

});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}