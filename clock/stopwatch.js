    // stopwatch

    const time = document.querySelector('.time');
    const start = document.querySelector('.startS');
    const reset = document.querySelector('.resetS');
    const stop = document.querySelector('.stopS');
    const hour = document.querySelector('.hours');
    let interval;

    start.addEventListener('click', function startTimer() {
      clearInterval(interval);
      interval = setInterval(stopWatch, 20);
    });

    reset.addEventListener('click', function resetTimer() {
      clearInterval(interval);
      milisecs = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
      time.innerText = `00:00:00`;
    });

    stop.addEventListener('click', function stopTimer() {
      clearInterval(interval);
    });

    let milisecs = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function stopWatch() {
      milisecs++;
      if (milisecs == 50) {
        milisecs = 0;
        seconds++;
        if (seconds == 60) {
          seconds = 0;
          minutes++;
          if (minutes == 60) {
            minutes = 0;
            hours++;
            hour.style.color = 'red';
            if (hours == 24) {
              hours = 0;
              clearInterval(interval);
              time.innerText = '00:00:00';
            }
          }
        }
      }

      let hhh = hours < 10 ? '0' + hours : hours;
      let mmm = minutes < 10 ? '0' + minutes : minutes;
      let sss = seconds < 10 ? '0' + seconds : seconds;
      let mms = milisecs < 10 ? '0' + milisecs : milisecs;

      time.innerText = `${mmm}:${sss}:${mms}`;
      hour.innerText = `${hhh}`;
    }