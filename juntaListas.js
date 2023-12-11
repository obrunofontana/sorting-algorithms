const { folha, galho } = require('./data');

const juntaListas = (list1, list2) => {
  let finalList = [];
  let currentIndexFinalList = 0;
  let currentIndexList1 = 0;
  let currentIndexList2 = 0;

  while (currentIndexList1 < list1.length && currentIndexList2 < list2.length) {
    let currentValueList1 = list1[currentIndexList1];
    let currentValueList2 = list2[currentIndexList2];

    if (currentValueList1.price < currentValueList2.price) {
      finalList[currentIndexFinalList] = currentValueList1;
      currentIndexList1++;
    } else {
      finalList[currentIndexFinalList] = currentValueList2;
      currentIndexList2++;
    }

    currentIndexFinalList++;
  }

  while (currentIndexList1 < list1.length) {
    finalList[currentIndexFinalList] = list1[currentIndexList1];
    currentIndexList1++;
    currentIndexFinalList++;
  }

  while (currentIndexList2 < list2.length) {
    finalList[currentIndexFinalList] = list2[currentIndexList2];
    currentIndexList2++;
    currentIndexFinalList++;
  }

  return finalList;
};

console.table(juntaListas(galho, folha));
