let cari = document.querySelector( '#city' );
cari.addEventListener( 'click', async function () {
  await fetch( "https://api.aladhan.com/v1/timingsByCity?city=" + cari.value + "&country=country" )
    .then( m => m.json() )
    .then( j => {

      let data = j.data.timings;

      document.querySelector( '.content' )
        .innerHTML = /*html*/ `
          <h1>${ cari.value }</h1>
          <p>maghrib : ${ data.Maghrib } </p>
          <p>isha : ${ data.Isha } </p>
          <p>midnight : ${ data.Midnight } </p>
          <p>imsak : ${ data.Imsak } </p>
          <p>fajr : ${ data.Fajr } </p>
          <p>sunrise : ${ data.Sunrise } </p>
          <p>dhuhr : ${ data.Dhuhr } </p>
          <p>asr : ${ data.Asr } </p>
          <p>sunset : ${ data.Sunset } </p>
        `;
      console.log( parseInt( data.Asr ) );
    } );

  await fetch( 'http://api.weatherapi.com/v1/current.json?key=c9ce1b8c35d04ec4bfe171021220801&q=' + cari.value )
    .then( w => w.json() ).then( j => {

      let result = j.current.condition;

      document.querySelector( '.weather' )
        .innerHTML = /*html*/ `
        <h1>${ j.location.name }</h1>
        <img src="`+ result.icon + `" alt="">
        <p>${ result.text }</p>
        
        `;

    } );
} );