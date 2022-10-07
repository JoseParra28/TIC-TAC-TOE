 
 const questionContainerElement = document.getElementById
 ('question-container')
 const startButton = document.getElementById ('start-btn')
 startButton.addEventListener('click', startGame)
 console.log('Started')
 startButton.classList.add ('hide')
 questionContainerElement.classList.remove ('hide')
 setNextQuestion()

 function startGame() {

 }
 function setNextQuestion(){

 }
 function selectAnswer () {

 }
const question = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
        ] 

    }
] 