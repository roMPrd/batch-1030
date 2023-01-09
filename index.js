const dataJson = require('./data.json');

window.load = start();

async function start() {
  const data = await fetch('./data.json');
  const dataJson = await data.json();
  console.log(dataJson);
  const sortedRank = dataJson.sort((r1, r2) => (parseInt(r1.contributionsTotal) < parseInt(r2.contributionsTotal)) ? 1 : (parseInt(r1.contributionsTotal) > parseInt(r2.contributionsTotal)) ? -1 : 0);
  insertHtmlTotal(sortedRank);
}

// ===== Sort by Total Contributions ===== //
const swiperTotal = document.getElementById('total-link');

swiperTotal.addEventListener('click', function() {displayTotal();}, false);

function displayTotal() {
  let sortedRankTotal = dataJson.sort((r1, r2) => (parseInt(r1.contributionsTotal) < parseInt(r2.contributionsTotal)) ? 1 : (parseInt(r1.contributionsTotal) > parseInt(r2.contributionsTotal)) ? -1 : 0);
  insertHtmlTotal(sortedRankTotal);
  swiper.slideTo(0);
}

// ===== Sort by 2022 Contributions ===== //
const swiper2022 = document.getElementById('2022-link');

swiper2022.addEventListener('click', function() {display2022();}, false);

function display2022() {
  let sortedRank2022 = dataJson.sort((r1, r2) => (parseInt(r1.contributions2022) < parseInt(r2.contributions2022)) ? 1 : (parseInt(r1.contributions2022) > parseInt(r2.contributions2022)) ? -1 : 0);
  insertHtml2022(sortedRank2022);
  swiper.slideTo(0)
}

// ===== Sort by 2023 Contributions ===== //
const swiper2023 = document.getElementById('2023-link');

swiper2023.addEventListener('click', function() {display2023();}, false);

function display2023() {
  let sortedRank2023 = dataJson.sort((r1, r2) => (parseInt(r1.contributions2023) < parseInt(r2.contributions2023)) ? 1 : (parseInt(r1.contributions2023) > parseInt(r2.contributions2023)) ? -1 : 0);
  insertHtml2023(sortedRank2023);
  swiper.slideTo(0)
}

// ===== Insert Into Html ===== //

function insertHtmlTotal(el) {
  changeColorTotal();
  swiper.removeAllSlides();

  Array.from(el).forEach((classmate, i) => {
    swiper.appendSlide(
    `<div class="swiper-slide card">
        <div class="card-content">
          <div class="image">
            <img src="${classmate.photo_url}" alt="">
          </div>

          <div class="rank">
            <img src="./image/${ i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'empty'}.png" alt="">
            <span class="text">rank:</span>
            <span class="number">#${i+1}</span>
          </div>

          <div class="media-icons">
            <a href="${classmate.linkedin_url}" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="${classmate.github_url}" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div class="name-profession">
            <span class="name">${classmate.name}</span>
          </div>

          <div class="stats">
            <div class="stat-category contributions" >
              <span id="${classmate.name.replace(/ /g,'-')}" class="number green">${classmate.contributionsTotal}<span class="text"> Contributions</span></span>
            </div>
          </div>

          <div class="about-me">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${classmate.github_username}&layout=compact&hide_border=true&title_color=7d2ae8"/>
          </div>
        </div>
      </div>
      `
    );
  });
}

function insertHtml2022(el) {
  changeColor2022();
  swiper.removeAllSlides();

  el.forEach((classmate, i) => {
    swiper.appendSlide(
    `<div class="swiper-slide card">
        <div class="card-content">
          <div class="image">
            <img src="${classmate.photo_url}" alt="">
          </div>

          <div class="rank">
            <img src="./image/${ i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'empty'}.png" alt="">
            <span class="text">rank:</span>
            <span class="number">#${i+1}</span>
          </div>

          <div class="media-icons">
            <a href="${classmate.linkedin_url}" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="${classmate.github_url}" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div class="name-profession">
            <span class="name">${classmate.name}</span>
          </div>

          <div class="stats">
            <div class="stat-category contributions" >
              <span id="${classmate.name.replace(/ /g,'-')}" class="number green">${classmate.contributions2022}<span class="text"> Contributions</span></span>
            </div>
          </div>

          <div class="about-me">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${classmate.github_username}&layout=compact&hide_border=true&title_color=7d2ae8"/>
          </div>
        </div>

      </div>
      `
    );
  });
}

function insertHtml2023(el) {
  changeColor2023();
  swiper.removeAllSlides();

  Array.from(el).forEach((classmate, i) => {
    swiper.appendSlide(
    `<div class="swiper-slide card">
        <div class="card-content">
          <div class="image">
            <img src="${classmate.photo_url}" alt="">
          </div>

          <div class="rank">
            <img src="./image/${ i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'empty'}.png" alt="">
            <span class="text">rank:</span>
            <span class="number">#${i+1}</span>
          </div>

          <div class="media-icons">
            <a href="${classmate.linkedin_url}" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="${classmate.github_url}" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div class="name-profession">
            <span class="name">${classmate.name}</span>
          </div>

          <div class="stats">
            <div class="stat-category contributions" >
              <span id="${classmate.name.replace(/ /g,'-')}" class="number green">${classmate.contributions2023}<span class="text"> Contributions</span></span>
            </div>
          </div>

          <div class="about-me">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${classmate.github_username}&layout=compact&hide_border=true&title_color=7d2ae8"/>
          </div>
        </div>

      </div>
      `
    );
  });
}

// ===== Change Buttons Color ===== //

function changeColorTotal() {
  swiperTotal.classList.add('change-color');
  swiper2022.classList.remove('change-color');
  swiper2023.classList.remove('change-color');
}

function changeColor2022() {
  swiperTotal.classList.remove('change-color');
  swiper2022.classList.add('change-color');
  swiper2023.classList.remove('change-color');
}

function changeColor2023() {
  swiperTotal.classList.remove('change-color');
  swiper2022.classList.remove('change-color');
  swiper2023.classList.add('change-color');
}
