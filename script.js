const quiz = [{
    question: "Q1 What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hypertext Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4"
},
{
    question: "Q2 What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading style sheep",
    c: "Cartoon style sheets",
    d: "Cascading super sheets",
    ans: "ans1"
},
{
    question: "Q3 What is the full form of HTTP?",
    a: "Hypertext Transfer Product",
    b: "Hypertext Test Product",
    c: "Hey Transfer Protocol",
    d: "Hypertext Transfer Protocol",
    ans: "ans4"
},
{
    question: "Q4 What is the full form of JS?",
    a: "Javascript",
    b: "Javasuper",
    c: "Justscript",
    d: "Jordenshoes",
    ans: "ans1"
}
];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const answers = document.querySelectorAll('.answer')

const submit = document.querySelector('#submit');
const scorearea= document.querySelector('#showscore')

let question_no = 0;
let score=0;

const loadquestion = ()=>{

    question.innerHTML = quiz[question_no].question
    option1.innerHTML = quiz[question_no].a
    option2.innerHTML = quiz[question_no].b
    option3.innerHTML = quiz[question_no].c
    option4.innerHTML = quiz[question_no].d

    question_no++;
}

const getcheckanswer= ()=> {
    let answer;
    answers.forEach((curAnsElm)=> {
        if (curAnsElm.checked) {
            answer =  curAnsElm.id;
        }
    });
    return answer;
}

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


loadquestion()

submit.addEventListener('click',()=>{
    const checkedanswer = getcheckanswer();
    if (question_no < quiz.length) {
        if (checkedanswer == quiz[question_no].ans) {
            score++;
        }
        deselectAll();
        loadquestion();
    }else{
        scorearea.innerHTML = `
        <h1 style="font-size:3rem; font-weight:bold; text-align: center; ">Your Score is :- ${score}/${quiz.length}  👍</h1>
        <button class="btn" onClick='location.reload()'>Replay</button>
        `;
        scorearea.classList.remove('scorearea');
    }
});


