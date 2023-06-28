import noFindFavoriteIngridients from '../template/not-found-cocktails-copy-copy.hbs';

const ifNotIngridients = document.querySelector(
  'body > main > div.favorite-ingridients-page > section > ul'
);
const ifNotIngridientsText = document.querySelector(
  'body > main > div.favorite-ingridients-page > section > h2'
);
const onClickFavoriteIngridientsBtnNav = document.querySelector(
  '#header > div > div.header__favorite-box > ul > li:nth-child(2)'
);

onClickFavoriteIngridientsBtnNav.addEventListener(
  'click',
  onClickEmptyListOnFavoriteIngridients
);

function onClickEmptyListOnFavoriteIngridients() {
  if (ifNotIngridients.children.length === 0) {
    ifNotIngridientsText.style.display = 'none';
    ifNotIngridients.insertAdjacentHTML(
      'beforeend',
      noFindFavoriteIngridients()
    );
  }
}
