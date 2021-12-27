let cari = document.querySelector('.city');
cari.addEventListener('keyup', async function (e) {
  if (e.keyCode == '13') {
    await fetch("https://api.aladhan.com/v1/timingsByCity?city=" + cari.value + "&country=country")
      .then(m => m.json())
      .then(j => {

        data = j.data.timings;

        document.querySelector('.content')
          .innerHTML = /*html*/ `
              <h1>${cari.value}</h1>
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
  }
});