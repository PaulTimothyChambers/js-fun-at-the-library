function saveReview(review, reviews) {
// refactor this to use .include method for arrays
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
  var pageCount = title.length * 20;
  return pageCount;
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
