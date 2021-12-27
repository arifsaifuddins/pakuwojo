fetch("./location.json")
  .then(m => m.json())
  .then(a => {

    a.forEach(ad => {

      fetch("https://api.pray.zone/v2/times/today.json?city=" + ad.capital)
        .then(m => m.json())
        .then(j => {

          data = j.results.datetime[0].times;
          console.log(data.Imsak);

          document.querySelector('body')
            .innerHTML += /*html*/ `
                <h1>maghrib : ${data.Maghrib} di ${ad.capital}</h1>`
        });
    });

  });