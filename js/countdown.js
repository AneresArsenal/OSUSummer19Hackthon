var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 25 * 60;

countdownNumberEl.textContent = Math.floor(countdown/60) + ':' + (countdown%60).toString().padStart(2, '0');

setInterval(function() {
  countdown = --countdown <= 0 ? 0 : countdown;

  countdownNumberEl.textContent = Math.floor(countdown/60) + ':' + (countdown%60).toString().padStart(2, '0');
}, 1000);