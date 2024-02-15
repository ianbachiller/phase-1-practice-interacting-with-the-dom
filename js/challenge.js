//TIMER: See the timer increment every second once the page has loaded.
const timer = document.querySelector("#counter")
let counter = 0
let likeCounter = 0
let likeCountPerSecond = {}
let timerStatus = true
const counterFunctionTimeout = () => timer.textContent = ++counter
timerInterval = setInterval(counterFunctionTimeout, 1000)

//Buttons and forms
const minusButton = document.querySelector("#minus")
const plusButton = document.querySelector("#plus")
const heartButton = document.querySelector("#heart")
const pauseButton = document.querySelector("#pause")
const submitButton = document.querySelector("#submit")
const form = document.querySelector('form')

//Add event listeners to the buttons and forms
minusButton.addEventListener('click',minusFunction)
plusButton.addEventListener('click', plusFunction)
heartButton.addEventListener('click', heartFunction)
pauseButton.addEventListener('click',pauseFunction)
form.addEventListener('submit', submitComment)

//Functions for when buttons are clicked
function minusFunction(){
    --counter
    timer.textContent = counter
}
function plusFunction(){
    ++counter
    timer.textContent = counter
}
function heartFunction() {
    // Check if the current second is a key in likeCountPerSecond object
    if (!likeCountPerSecond[counter]) {
        // If not, initialize it with a count of 0
        likeCountPerSecond[counter] = 0
    }
    // Increment the like count for the current second
    ++likeCountPerSecond[counter]
    // Call the function to update the display
    updateLikesDisplay()
}
function updateLikesDisplay() {
    const liPerHeartClick = document.createElement('li')
    const heartCommentUl = document.querySelector('.likes')
    liPerHeartClick.textContent = `${counter} was liked ${likeCountPerSecond[counter]} times`;
    heartCommentUl.appendChild(liPerHeartClick)
}
function submitComment(event){
    event.preventDefault()
    const commentSection = document.querySelector('div div')
    const p = document.createElement('p')
    const formValue = document.querySelector("#comment-input").value
    p.textContent = formValue
    commentSection.appendChild(p)
}
function pauseFunction(){
    if (timerStatus){
        clearInterval(timerInterval)
        pauseButton.textContent = 'Resume'
    }else {
        timerInterval = setInterval(counterFunctionTimeout, 1000)
        pauseButton.textContent =  'Pause'
    }
    timerStatus = !timerStatus
    console.log(timerStatus)
}
