const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//* Destrcucturing
// const book = getBook(3);
// book;
// const title = book.title;
// const author = book.author;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// console.log(title, author, genres);

// ** this method is for arrays
// ** ... rest operations , it should be at the end of the array
// const [primaryGenres, secondaryGenres, ...otherGenres] = genres;

// console.log(primaryGenres, secondaryGenres, otherGenres);

// *TODO: ...spread operations , this syntax will take all value out of the array then place them one by one , it should be at the start || end of the array
// const newGenres = [...genres, "epic fantasy"];
// const newGenres = [genres, "epic fantasy"];
// newGenres;

/*
 *this method is for objects in spread operations
 *, this syntax will take all value out of the object then place them one by one
 *, it should be at the start of the object
 */
// const updateBook = {
//   ...book,
//   // *TODO: Adding new properties
//   moviePublishDate: "2001-12-19",
//   // *TODO: Overwriting an exiting properties
//   pages: 1210,
// };
// const updateBook = { book, moviePublishDate: "2001-12-19" };
// updateBook;

//* Arrow functions

// function getYear(str) {
//   return str.split("-")[0];
// }

// const getYear = (str) => str.split("-")[0];

/*
this is Template Literals
 ? const summary = `${title}, a${pages}-page long book, was written by ${author} 
 ? and published in ${getYear(publicationDate)}. 
 ? The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`
 */

//* this is Ternaries statement
// *TODO: Ternaries have three part => first part is condition
// *TODO: , second part is result of condition if is true
// *TODO: , third part is result of condition if is false
// const pageRange =
//   pages > 1000 ? "over a thousand pages" : "less than a 1000 pages";
// console.log(`The Book has ${pageRange} pages`);

// * Short-Circuiting and Logical Operators
// *TODO: && do like if statement, return the first value not even look at second value
// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has a movie");

// * truly , falsy
// *! falsy : 0, '', null, undefined
// console.log("jonas" && "Some string");
// console.log(0 && "Some string");

// *TODO: || do like if statement, first value is true and will return result doesn't even look at second value
// console.log(true || "Some string");
// console.log(false || "Some string");

// console.log(book.translations.spanish);
// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// console.log(spanishTranslation);

// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// *nullish coalescing
// *TODO: ?? only return second value when first value is null or undefined
// *TODO: but not when it is zero or empty string
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// * Optional Chaining

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
// * if value in object is undefined Js not try to read reviewsCount
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book));

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  // * if value in object is undefined Js not try to read reviewsCount
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const books = getBooks();
books;

// * Array .map Methods
const x = [1, 2, 3, 4, 5].map((e) => e * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

const longbookWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longbookWithMovie;

const adventureBook = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBook;
