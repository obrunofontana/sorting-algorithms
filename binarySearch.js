const books = require('./books');

const binarySearch = (array, from, until, search) => {
  const mid = Math.floor((from + until) / 2);
  const current = array[mid];

  if (from > until) {
    return -1;
  }

  if (search === current.price) {
    return array[mid];
  }

  if (search < current.price) {
    return binarySearch(array, from, mid - 1, search);
  }

  if (search > current.price) {
    return binarySearch(array, mid + 1, until, search);
  }
};

console.log('binary search', binarySearch(books, 0, books.length - 1, 12));
