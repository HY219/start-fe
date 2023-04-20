console.log('search.js');

const apiUrl = 'https://dapi.kakao.com/v2/search/web';
const KAKAO_API_KEY = '755efce81291197edff1bab4d064f94a';

const options = {
  headers: {
    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
  },
};

const $searchForm = document.getElementById('searchForm');
const $searchInput = document.getElementById('searchInput');
// let list;

let page = 1;

$searchForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('submit');

  const query = $searchInput.value;
  const url = `${apiUrl}?query=${query}&size=10&page=${page}`;

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      //json객체를 배열로 반환
      const list = Object.values(json);
      //   console.log(list[0]);
      //   console.log(list[0][0].title);
      for (i = 0; i < list.length; i++) {
        console.log(list[0][i].title);
      }
    });
  //   console.log(list);
});

// const div = document.createElement('div');
// document.appendChild(card);
