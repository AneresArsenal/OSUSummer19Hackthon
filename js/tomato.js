var countdown;
var pauseActive = false;
var pauseID;
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
  pauseActive = false;
  $('.full-tomato').addClass('split');

  //Set timer to 25 mins if not in the middle of a pause
  if (!pauseActive) { var countdown = 25 * 60; }

  countdownNumberEl.textContent = Math.floor(countdown/60) + ':' + (countdown%60).toString().padStart(2, '0');

  pauseID = setInterval(function() {
    countdown = --countdown <= 0 ? 0 : countdown;
    countdownNumberEl.textContent = Math.floor(countdown/60) + ':' + (countdown%60).toString().padStart(2, '0');
  }, 1000);
}

function pauseTimer() {
  $('.full-tomato').removeClass('split');
  pauseActive = true;
  window.clearInterval(pauseID);
}

function restartTimer() {
  console.log('restart at: ', countdown);
  pauseActive = false;
  $('.full-tomato').addClass('split');
  pauseID = setInterval(function() {
    countdown = --countdown <= 0 ? 0 : countdown;
    countdownNumberEl.textContent = Math.floor(countdown/60) + ':' + (countdown%60).toString().padStart(2, '0');
  }, 1000);
}
