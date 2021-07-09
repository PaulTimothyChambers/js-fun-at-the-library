function saveReview(review, reviews) {
  for (var i = 0; i <= reviews.length; i++) {
    if (review !== reviews[i]) {
      reviews.push(review)
      return reviews
    } else {
      return reviews
    }
  }
};

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return newCharacter
};

function createTitle(title) {
  title = `The ${title}`
  return title
};

function calculatePageCount(title) {
  var currentPageCount = 0;
  for (let x in title) {
    currentPageCount += 20;
  }
  return currentPageCount;
};

function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book
};

function editBook(book) {
  book.pageCount = book.pageCount * 0.75
  return book.pageCount
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};
