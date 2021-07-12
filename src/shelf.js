
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
    return shelf;
  }
};

function unshelfBook(book, shelf) {
  for (var i in shelf) {
    if (shelf[i].title === book) {
      shelf.splice(shelf.indexOf(shelf[i]), 1)
      return shelf
    }
  }
};

function listTitles(shelf) {
  var titleListing = []
  for (i = 0; i < shelf.length; i++) {
    titleListing.push(shelf[i].title)
  }
  return titleListing.join(", ")
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      var itDoes = true
    } else {
      var itDoes = false
    }
  }
  return itDoes
};
