const getIndexCheaper = (arrProducts, initialPos) => {
  let cheaper = initialPos;

  for (let current = initialPos; current < arrProducts.length; current++) {
    if (arrProducts[current].price < arrProducts[cheaper].price) {
      cheaper = current;
    }
  }

  return cheaper;
};

module.exports = getIndexCheaper;
