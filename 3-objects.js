var assertEquals = require("./assert-helper");

var books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter",
    isAvailable: false
  }
];

/* 1. Define a function listTitles(booksArray) that takes in an array of book objects
       and returns an array of titles (strings) */
function listTitles(booksArray) {
  return booksArray.map(book => book.title);
}

// Assertions (do not change)
assertEquals(listTitles(books), [
  "The Road Ahead",
  "Lord of the Rings",
  "Harry Potter"
]);

/* 2. Define a function listAuthors(booksArray) that takes in an array of book objects
       and returns an array of authors (strings) */

function listAuthors(booksArray) {
  return booksArray.map(book => book.author);
}

// Assertions (do not change)
assertEquals(listAuthors(books), ["Bill Gates", "JRR Tolkkien", "JK Rowling"]);

/* 3. Define a more general function listValues(booksArray, key) that takes in an array
       of book objects and returns an array of authors (strings) */

function listValues(booksArray, key) {
  return booksArray.map(book => book[key]);
  /*return booksArray.map(book => {
    if(Object.keys(book).indexOf(key) > -1) {
      const descriptor = Object.getOwnPropertyDescriptor(book, key);
      return descriptor.value;  // note: will cause errors for non-Key
    } else {
      return undefined;
    }
  });*/
}
console.log('LIST VALUES')
// Assertions (do not change)
assertEquals(listValues(books, "author"), [
  "Bill Gates",
  "JRR Tolkkien",
  "JK Rowling"
]);
assertEquals(listValues(books, "title"), [
  "The Road Ahead",
  "Lord of the Rings",
  "Harry Potter"
]);
assertEquals(listValues(books, "isAvailable"), [true, true, false]);
assertEquals(listValues(books, "nonKey"), [undefined, undefined, undefined]);

// 4. Define a function getAvailableBooks(booksArray) that returns a list of available books

function getAvailableBooks(booksArray) {
  return booksArray.filter(book => book.isAvailable).map(book => book.title);
}

// Assertions (do not change)
assertEquals(getAvailableBooks(books), ["The Road Ahead", "Lord of the Rings"]);
