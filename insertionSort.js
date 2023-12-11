const books = require('./books');
const changePosition = require('./changePosition');

const insertionSort = (list) => {
  for (let current = 0; current < list.length; current++) {
    let review = current;

    while (review > 0 && list[review].price < list[review - 1].price) {
      changePosition(list, review);

      review--;
    }
  }
  console.table(list);
};

insertionSort(books);
