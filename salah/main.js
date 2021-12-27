fetch("./location.json")
  .then(m => m.json())
  .then(a => {

    a.forEach(ad => {

      fetch("https://api.pray.zone/v2/times/today.json?city=" + ad.capital)
        .then(m => m.json())
        .then(j => {

          data = j.results.datetime[0].times;

          document.querySelector('body')
            .innerHTML += /*html*/ `
              <h1>${ad.capital}</h1>
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
    });
  });