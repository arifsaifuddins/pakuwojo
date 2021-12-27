fetch("https://api.aladhan.com/v1/timingsByCity?city=khartoum&country=sudan")
  .then(m => m.json())
  .then(j => {

    data = j.data.timings;

    document.querySelector('body')
      .innerHTML += /*html*/ `
        <p>maghrib : ${data.Maghrib} </p>
        <p>isha : ${data.Isha} </p>
        <p>midnight : ${data.Midnight} </p>
        <p>imsak : ${data.Imsak} </p>
        <p>fajr : ${data.Fajr} </p>
        <p>sunrise : ${data.Sunrise} </p>
        <p>dhuhr : ${data.Dhuhr} </p>
        <p>asr : ${data.Asr} </p>
        <p>sunset : ${data.Sunset} </p>
      `;
  });