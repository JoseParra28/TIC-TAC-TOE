const startButton = document.getElementById ('start-btn')
const questionContainerElement = document.getElementById
 ('question-container')

 const shuffledQuestions, currentQuetionIndex
 
startButton.addEventListener ('click', startGame)

 function startGame() {
    console.log('Started')
startButton.classList.add ('hide')
 questionContainerElement.classList.remove ('hide')
 shuffledQuestions = question.sort(() => Math.random () - .5 )
 currentQuetionIndex = 0
 setNextQuestion()

 }
 function setNextQuestion(){

 }
 function selectAnswer () {

 }
const question = [
    {
        question: 'What is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ] 

    }
] 