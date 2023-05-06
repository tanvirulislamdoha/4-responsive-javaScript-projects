const quizData = [
    {
        question: 'What is the Capital of Bangladesh?',
        a: 'Sylhet',
        b: 'Chittagong',
        c: 'Dhaka',
        d: 'Barishal',
        correct: 'c'
    },
    {
        question: 'What is the National Language of America?',
        a: 'Latin',
        b: 'Spanish',
        c: 'Hindi',
        d: 'English',
        correct: 'd'
    },
    {
        question: 'Who is the President of France?',
        a: 'Emanuel Macron',
        b: 'Sheikh Hasina',
        c: 'Donald J Trump',
        d: 'Norendra Modi',
        correct: 'a'
    },
    {
        question: 'Where is World Bank Headquarter is located?',
        a: 'Mumbai',
        b: 'New York',
        c: 'Dhaka',
        d: 'Paris',
        correct: 'b'
    },
    {
        question: 'Which country has the most muslim population?',
        a: 'Bangladesh',
        b: 'Saudi Arabia',
        c: 'Indoneshia',
        d: 'Turkeya',
        correct: 'c'
    }
    ,
    {
        question: 'SAMSUNG is a ____ company.',
        a: 'Chainese',
        b: 'American',
        c: 'Russian',
        d: 'South Korean',
        correct: 'd'
    },
    {
        question: 'Which country has Iffel Tower',
        a: 'France',
        b: 'Spain',
        c: 'Germany',
        d: 'Norway',
        correct: 'a'
    },
    {
        question: 'Which country is not neighbour of Russia?',
        a: 'Finland',
        b: 'Lithunia',
        c: 'Germany',
        d: 'Ukraine',
        correct: 'c'
    },
    {
        question: 'Who is the owner of SpaceX?',
        a: 'Jeff Bezos',
        b: 'Elon Musk',
        c: 'Mark Zakarburg',
        d: 'Bill Gates',
        correct: 'b'
    },
    {
        question: 'What is the national symbol of CANADA?',
        a: 'Eagle',
        b: 'Maple Leaf',
        c: 'Lion',
        d: 'Tiger',
        correct: 'b'
    }
]

// console.log("hi");
const result = document.getElementById("quiz");
const question = document.querySelector(".question_text");
const a = document.querySelector(".a_text");
const b = document.querySelector(".b_text");
const c = document.querySelector(".c_text");
const d = document.querySelector(".d_text");
const answerEls = document.querySelectorAll(".answer");
const btn = document.querySelector("button");

let currentQuestion = 0;
let score = 0;

loadQuiz();
function loadQuiz (){

    deSelectAnswer();
    const currentQuiz = quizData[currentQuestion];

    question.textContent = currentQuiz.question;
    a.textContent = currentQuiz.a;
    b.textContent = currentQuiz.b;
    c.textContent = currentQuiz.c;
    d.textContent = currentQuiz.d;
}

function getselected(){
    let ans = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            ans =  answerEl.id;
        }
    });
    return ans;

}
function deSelectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

btn.addEventListener("click", ()=>{

    const answer = getselected();

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }

        currentQuestion++;
        
        if(currentQuestion < quizData.length){
            loadQuiz();
        }
        else{
            result.innerHTML =  `
            <h3>You have got ${score}/${quizData.length}.</h3>
            
            <button onclick="location.reload()">Reload</button>
        `
        }
    }
})