const books = require('./books');
const getIndexCheaper = require('./getIndexCheaper');
const changePosition = require('./changePosition');

const selectionSort = (list) => {
  for (let current = 0; current < list.length - 1; current++) {
    const indexCheaper = getIndexCheaper(list, current);
    changePosition(list, indexCheaper);
  }

  console.table(list);
};

selectionSort(books);
