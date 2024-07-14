console.table(books);
// task 1
function bookFilterGenre(books, genre) {
    return books.filter((book) => book.genre === genre);
}
const booksGenre = bookFilterGenre(books, 'Магічний реалізм')
console.table(booksGenre);
// task 2
function bookFilterPages(books, minPages, maxPages) {
    return books.filter((book) => book.pages >= minPages && book.pages <= maxPages);
}
const booksPages = bookFilterPages(books, 200, 500);
console.table(booksPages);
// task 3
function booksSortPages(books) {
    return books.toSorted((book1, book2) => book1.pages - book2.pages);
}
const booksSortPage = booksSortPages(books);
console.table(booksSortPage);
// task 4
function booksSortYears(books) {
    return books.toSorted((book1, book2) => book2.yearCreate - book1.yearCreate);
}
const booksSortYear = booksSortYears(books);
console.table(booksSortYear);
// task 5
function booksSortAutor(books, author) {
    return books.filter((book) => book.author === author).map((book) => book.title)
}
const bookSortAutor = booksSortAutor(books, 'Джордж Орвелл');
console.table(bookSortAutor);
// task 6
function booksSortYearAutor(books, yearCreate) {
    return books.filter((book) => book.yearCreate === yearCreate).map((book) => book.author);
}
const bookSortYearAutor = booksSortYearAutor(books, 1945);
console.table(bookSortYearAutor);
// task 7
function booksSortName(books, genre) {
    return books.filter((book) => book.genre === genre).toSorted((book1, book2) => {
        if (book1.title === book2.title) {
            return 0;
        } if (book1 > book2) {
            return 1;
        } if (book1 < book2) {
            return -1;
        }
    });
}
const bookSortName = booksSortName(books, 'Пригоди');
console.table(bookSortName);