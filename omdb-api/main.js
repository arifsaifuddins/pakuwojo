// // 1. cara ajax jQuery

// $('.input-key').on('keyup', function (e) {
//   if (e.keyCode == '13') {
//     getData();
//   }
// });

// $('.search-btn').on('click', function () {
//   getData();
// });

// // funsional

// function getData() {
//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=412e58d4&s=' + $('.input-key').val(),
//     success: show => {
//       const movie = show.Search;
//       let datas = '';
//       movie.forEach(m => {
//         datas += dataCards(m);
//       });
//       $('.show').html(datas);

//       // detail

//       $('.see-more').on('click', function () {
//         $.ajax({
//           url: 'http://www.omdbapi.com/?apikey=412e58d4&i=' + $(this).data('imdb'),
//           success: d => {
//             const movieDetail = seeMovieDetail(d);
//             $('.modal-body').html(movieDetail);
//           }
//         });
//       });
//     }
//   });
// }


// // 2. cara fetch js

// const inputKey = document.querySelector('.input-key');
// const searchBtn = document.querySelector('.search-btn');

// inputKey.addEventListener('keyup', function (e) {
//   if (e.keyCode == '13') {
//     getData();
//   }
// });

// searchBtn.addEventListener('click', function () {
//   getData();
// });

// function getData() {
//   let key = inputKey.value;
//   fetch('http://www.omdbapi.com/?apikey=412e58d4&s=' + key)
//     .then(m => m.json())
//     .then(k => {
//       const movie = k.Search;
//       let datas = '';
//       movie.forEach(m => {
//         datas += dataCards(m);
//       });

//       document.querySelector('.show')
//         .innerHTML = datas;

//       const seeMore = document.querySelectorAll('.see-more');
//       seeMore.forEach(more => {
//         more.addEventListener('click', function () {
//           const dataid = this.dataset.imdb;
//           fetch('http://www.omdbapi.com/?apikey=412e58d4&i=' + dataid)
//             .then(j => j.json())
//             .then(d => {
//               const detail = seeMovieDetail(d);
//               document.querySelector('.modal-body')
//                 .innerHTML = detail;
//             });
//         });
//       });
//     });
// }


// 3. fetch js (async, await)

const inputKey = document.querySelector('.input-key');
const searchBtn = document.querySelector('.search-btn');
const show = document.querySelector('.show');
const size = document.querySelector('.size');

searchBtn.addEventListener('click', async function () {
  try {
    let key = inputKey.value;
    const movie = await getData(key);
    updateUI(movie);
    size.innerHTML = '';
  } catch (err) {
    show.innerHTML = '';
    size.innerHTML = err;
  }
});

inputKey.addEventListener('keyup', async function (e) {
  if (e.keyCode == '13') {
    try {
      let key = inputKey.value;
      const movie = await getData(key);
      updateUI(movie);
      size.innerHTML = '';
    } catch (err) {
      show.innerHTML = '';
      size.innerHTML = err;
    }
  }
});

function getData(key) {
  return fetch('http://www.omdbapi.com/?apikey=412e58d4&s=' + key)
    .then(m => {
      if (!m.ok) {
        throw new Error('Input a Correct Movie...');
      }
      return m.json();
    })
    .then(k => {
      if (k.Response === 'False') {
        throw new Error('Input a Correct Movie...');
      }
      return k.Search;
    });
}

function updateUI(movie) {
  let datas = '';
  movie.forEach(m => datas += dataCards(m));
  show.innerHTML = datas;
}

// event binding

document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('see-more')) {
    const dataid = e.target.dataset.imdb;
    let detail = await detailData(dataid);
    updateUIDetail(detail);
  }
});

function detailData(dataid) {
  return fetch('http://www.omdbapi.com/?apikey=412e58d4&i=' + dataid)
    .then(j => j.json())
    .then(d => d);
}

function updateUIDetail(d) {
  detail = seeMovieDetail(d);
  document.querySelector('.modal-body')
    .innerHTML = detail;
}


// data

function dataCards(m) {
  return /*html*/ `
    <div class="col-md-3 my-3">
      <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <p class="card-subtitle text-muted">${m.Year}</p>
          <p class="card-text">${m.Type}</p>
        <a href="#" class="btn btn-primary see-more" data-bs-toggle="modal" data-bs-target="#seeDetail" data-imdb="${m.imdbID}">See Detail</a>
        </div>
      </div>
    </div>
  `;
}

// detail

function seeMovieDetail(d) {
  return /*html*/ `
    <div class="row">
      <div class="col-lg-4">
        <img src="${d.Poster}" class="img-fluid">
      </div>
      <div class="col-lg">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h3>${d.Title}</h3>
          </li>
          <li class="list-group-item">
            <p><strong>Director 
              : </strong>${d.Director}</p>
          </li>
          <li class="list-group-item">
            <p><strong>Writer : </strong>${d.Writer}</p>
          </li>
          <li class="list-group-item">
            <p><strong>Actors : </strong>${d.Actors}</p>
          </li>
          <li class="list-group-item">
            <p><strong>Released : </strong>${d.Released}</p>
          </li>
          <li class="list-group-item">
            <p><strong>Genre : </strong>${d.Genre}</p>
          </li>
          <li class="list-group-item">
            <p><strong>Plot : </strong>${d.Plot}</p>
          </li>
        </ul>
      </div>
    </div>
  `;
}