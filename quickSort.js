const books = require('./books');

const changePlaces = (array, from, to) => {
  const element1 = array[from];
  const element2 = array[to];

  array[to] = element1;
  array[from] = element2;
};

const partition = (array, left, right) => {
  let pivot = array[Math.floor((left + right) / 2)];
  let currentLeft = left;
  let currentRight = right;

  while (currentLeft <= currentRight) {
    while (array[currentLeft].price < pivot.price) {
      currentLeft++;
    }

    while (array[currentRight].price > pivot.price) {
      currentRight--;
    }

    if (currentLeft <= currentRight) {
      changePlaces(array, currentLeft, currentRight);
      currentLeft++;
      currentRight--;
    }
  }
  return currentLeft;
};

const quickSort = (array, left, right) => {
  if (array.length > 1) {
    const currentIndex = partition(array, left, right);

    if (left < currentIndex - 1) {
      quickSort(array, left, currentIndex - 1);
    }

    if (currentIndex < right) {
      quickSort(array, currentIndex, right);
    }
  }
  return array;
};

console.log('quickSort(books)', quickSort(books, 0, books.length - 1));
