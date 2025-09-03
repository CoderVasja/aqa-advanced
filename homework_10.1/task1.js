
import { EBook } from './EBook.js';
import { Book } from './Book.js';

let books = [
    new EBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "PDF"),
    new EBook("1984", "George Orwell", 1949, "EPUB"),
    new EBook("To Kill a Mockingbird", "Harper Lee", 1960, "MOBI"),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1924),
    new Book("1984", "George Orwell", 1949),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960)
];

console.log(Book.oldestBook(books).printInfo());

let someBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let ebookFromBook = EBook.fromBook(someBook, "EPUB");
ebookFromBook.printInfo();
