fetch("https://api.pray.zone/v2/times/today.json?city=khartoum")
  .then(m => m.json())
  .then(j => {

    data = j.results.datetime[0].times;
    console.log(data.Imsak);

    document.querySelector('body')
      .innerHTML = /*html*/ `
        <h1>${data.Maghrib}</h1>`
  });