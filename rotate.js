function rotateCard() {
  let nameProfession = document.querySelector('.name-profession');
  let stats = document.querySelector('.stats');
  let button = document.querySelector('.button');
  let aboutMe = document.querySelector('.about-me');

  if (aboutMe.classList.contains('hide')) {
    aboutMe.classList.remove('hide');
    nameProfession.classList.add('hide');
    stats.classList.add('hide');
    button.classList.add('hide');
  }
  aboutMe.classList.add('hide');
  nameProfession.classList.remove('hide');
  stats.classList.remove('hide');
  button.classList.remove('hide');
}
