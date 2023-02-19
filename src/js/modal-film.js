import { buttonsListeners } from './local-storage';

export function addModal() {
  document.querySelector('.movies__list').addEventListener('click', openModal);
  // createFilmModal();
}

const modal = document.querySelector('[data-modal]');
const modalBox = document.querySelector('.modal-film');

function openModal(event) {
  let movie = event.target.parentNode;
  movie = movie.parentNode;

  const movieId = movie.dataset.movieId;
  console.log(movieId);

  modal.classList.remove('is-hidden');
  modalBox.classList.add('is-visible');
  document
    .querySelector('.movies__list')
    .removeEventListener('click', openModal);
}

const closeModal = () => {
  modal.classList.add('is-hidden');
  modalBox.classList.remove('is-visible');
  addModal();
};

const closeBtn = document.querySelector('.modal-film__close-btn');
closeBtn.addEventListener('click', function close() {
  closeModal();
});

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

document.addEventListener('keyup', function escapeClose(e) {
  if (e.key === 'Escape') {
    closeModal();
    document.removeEventListener('keup', escapeClose);
  }
});

//end of modal opening and closing

// poniżej produkują się ważne rzeczy

// function createFilmModal({
//   poster_path,
//   title,
//   vote_avarage,
//   vote_count,
//   popularity,
//   genres,
//   overview,
//   id,
// }) {
//   const filmInfoModal = `<div class="modal-film__container" data-id=${id}>
//       <div class="modal-film__poster-box">
//         <img
//           class="modal-film__poster-img"
//           src="${poster_path}"
//           alt="${title}"
//         />
//       </div>
//       <div class="modal-film__info-box">
//         <div class="modal-film__title">${title}</div>
//         <div class="modal-film__stats">
//           <table class="modal-film__table">
//             <tr>
//               <td class="modal-film__table-title">Vote / Votes</td>
//               <td class="modal-film__table-data">
//                 <span class="modal-film__score">${vote_avarage}</span> /
//                 <span class="modal-film__total-votes">${vote_count}</span>
//               </td>
//             </tr>
//             <tr>
//               <td class="modal-film__table-title">Popularity</td>
//               <td class="modal-film__table-data">${popularity}</td>
//           </tr></td>
//             </tr>
//             <tr>
//               <td class="modal-film__table-title">Original Title</td>
//               <td class="modal-film__table-data">${title}</td>
//             </tr>
//             <tr>
//               <td class="modal-film__table-title">Genre</td>
//               <td class="modal-film__table-data">${genres}</td>
//             </tr>
//           </table>
//         </div>
//         <div class="modal-film__about">
//           <p class="modal-film__about-title">ABOUT</p>
//           <p class="modal-film__about-txt">${overview}</p>
//         </div>
//         <div class="modal-film__btn">
//           <button id="watched" class="modal-film__btn-watched" type="button">
//             ADD TO WATCHED
//           </button>
//           <button id="queue" class="modal-film__btn-queue" type="button">
//             ADD TO QUEUE
//           </button>
//         </div>
//       </div>
//     </div>`;
//   addFilmInfoModal(filmInfoModal);
// }

// function addFilmInfoModal(markup) {
//   removeFilmInfoModal();
//   modalFilm.insertAdjacentHTML('beforeend', markup)
// }

// function removeFilmInfoModal() {
//   modalFilm.innerHTML = "";
// }
