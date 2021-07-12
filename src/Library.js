function createLibrary(lbry) {
  var newLbry = {
    name: lbry,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
  return newLbry
};

function addBook(lbry, book) {
  lbry.shelves[book.genre].unshift(book)
};

function checkoutBook(lbry, title, genre) {
  for (var i = 0; i < lbry.shelves[genre].length; i++) {
    if (lbry.shelves[genre][i].title === title) {
      lbry.shelves[genre].splice(i, 1)
      return `You have now checked out ${title} from the ${lbry.name}`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${lbry.name}`
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
