const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click", () => {
  console.log("Start button clicked");
  startCountdown();
});




// ITERATION 2: Start Countdown
document.querySelector('#time').innerText = remainingTime;
function startCountdown() {
  console.log("startCountdown called!");

const myInterval = setInterval(() => {
  startButton.disabled = true;
  document.querySelector('#time').innerText = remainingTime;
  remainingTime--;
  if (remainingTime<0) {
    clearInterval(myInterval);
showToast();
  };
}, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
