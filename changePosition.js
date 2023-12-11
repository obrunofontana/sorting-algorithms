const changePosition = (list, review) => {
  const currentReview = list[review];
  const previousReview = list[review - 1];

  list[review] = previousReview;
  list[review - 1] = currentReview;
};

module.exports = changePosition;
