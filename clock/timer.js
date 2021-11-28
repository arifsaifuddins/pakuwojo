   // timer

   let inter;
   let hTimer = document.querySelector('.hour-timer');
   let mTimer = document.querySelector('.minute-timer');
   let sTimer = document.querySelector('.second-timer');
   let addMin = document.querySelector('.min60');
   let addHou = document.querySelector('.hou60');
   const startT = document.querySelector('.startT');
   const resetT = document.querySelector('.resetT');
   const stopT = document.querySelector('.stopT');

   addMin.addEventListener('click', () => {
     mTimer.value++;
     if (mTimer.value < 10) mTimer.value = '0' + mTimer.value;
     handleTime();
     clearInterval(inter);
   });

   addHou.addEventListener('click', () => {
     hTimer.value++;
     if (hTimer.value < 10) hTimer.value = '0' + hTimer.value;
     handleTime();
     clearInterval(inter);
   });

   function handleTime() {
     if (sTimer.value == 60) {
       sTimer.value = 0;
       mTimer.value++;
       if (sTimer.value < 10) sTimer.value = '0' + sTimer.value;
       if (mTimer.value < 10) mTimer.value = '0' + mTimer.value;
     }
     if (mTimer.value == 60) {
       mTimer.value = 0;
       hTimer.value++;
       if (mTimer.value < 10) mTimer.value = '0' + mTimer.value;
       if (hTimer.value < 10) hTimer.value = '0' + hTimer.value;
     }
     if (hTimer.value == 25) {
       hTimer.value = 0 + '0';
       mTimer.value = 0 + '0';
       sTimer.value = 0 + '0';
     }
   }

   startT.addEventListener('click', () => {
     clearInterval(inter);
     inter = setInterval(setTimer, 1000);
   });

   stopT.addEventListener('click', () => {
     clearInterval(inter);
   });

   resetT.addEventListener('click', () => {
     clearInterval(inter);
     hTimer.value = 0 + '0';
     mTimer.value = 0 + '0';
     sTimer.value = 0 + '0';
   });

   function setTimer() {
     if (sTimer.value != 0) {
       sTimer.value--;
       if (sTimer.value < 10) sTimer.value = '0' + sTimer.value;
     } else if (mTimer.value != 0) {
       mTimer.value--;
       sTimer.value = 59;
       if (mTimer.value < 10) mTimer.value = '0' + mTimer.value;
     } else if (hTimer.value != 0) {
       hTimer.value--;
       mTimer.value = 59;
       sTimer.value = 59;
       if (hTimer.value < 10) hTimer.value = '0' + hTimer.value;
     }
   }