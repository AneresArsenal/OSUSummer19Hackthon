const workTime = 1500;
const restTime = 300;
var countdown;
var pauseActive = false;
var intervalID;
var countdownNumberEl = document.getElementById("countdown-number");

$('.full-tomato').click((event) => {
  if ($('.full-tomato').hasClass('split')) {
    timeLeft = (countdownNumberEl.textContent).split(':');
    countdown = Number(timeLeft[0] * 60) + Number(timeLeft[1]);
    pauseTimer();
  } else {
    pauseActive ? restartTimer() : startTimer();
  }
})

function startTimer() {
  window.clearInterval(intervalID);
  pauseActive = false;
  $('.full-tomato').addClass('split');

  //Set timer to 25 mins if not in the middle of a pause
  if (!pauseActive) { var countdown = workTime; }

  countdownNumberEl.textContent = toTime(countdown);

  intervalID = setInterval(function() {
    --countdown;
    if (countdown <= 0) {
      countdown = 0;
      restBreak();
    }
    countdownNumberEl.textContent = toTime(countdown);
  }, 1000);
  alert('Start working!');
}

function pauseTimer() {
  $('.full-tomato').removeClass('split');
  pauseActive = true;
  window.clearInterval(intervalID);
}

function restartTimer() {
  console.log('restart at: ', countdown);
  pauseActive = false;
  $('.full-tomato').addClass('split');
  intervalID = setInterval(function() {
    --countdown;
    if (countdown <= 0) {
      countdown = 0;
      restBreak();
    }
    countdownNumberEl.textContent = toTime(countdown);
  }, 1000);
}

function restBreak() {
  //End the current work interval
  window.clearInterval(intervalID);
  countdown = restTime;
  intervalID = setInterval(function() {
    --countdown;
    if (countdown <= 0) {
      countdown = 0;
      startTimer();
    }
    countdownNumberEl.textContent = toTime(countdown);
  }, 1000);
  alert('Take a break!');
}

function toTime (val) {
  return Math.floor(val/60).toString().padStart(2, '0') + ':' + (val%60).toString().padStart(2, '0');
}
