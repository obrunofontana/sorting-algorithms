const books = require('./books');

const order = (array1, array2) => {
  let finalList = [];
  let currentIndexArray1 = 0;
  let currentIndexArray2 = 0;

  while (
    currentIndexArray1 < array1.length &&
    currentIndexArray2 < array2.length
  ) {
    let currentValueArray1 = array1[currentIndexArray1];
    let currentValueArray2 = array2[currentIndexArray2];

    if (currentValueArray1.price < currentValueArray2.price) {
      finalList.push(currentValueArray1);
      currentIndexArray1++;
    } else {
      finalList.push(currentValueArray2);
      currentIndexArray2++;
    }
  }

  return finalList.concat(
    currentIndexArray1 < array1.length
      ? array1.slice(currentIndexArray1)
      : array2.slice(currentIndexArray2)
  );
};

const mergeSort = (array) => {
  if (array.length > 1) {
    const mid = Math.floor(array.length / 2);
    const part1 = mergeSort(array.slice(0, mid));
    const part2 = mergeSort(array.slice(mid, array.length));
    array = order(part1, part2);
  }

  return array;
};

console.log('Result', mergeSort(books))


