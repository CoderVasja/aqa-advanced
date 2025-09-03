import { Book } from './Book.js';
export class EBook extends Book {

    #formats = ['PDF', 'EPUB', 'MOBI'];

    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;   
    }

    get format() {
        return this._format;
    }
    set format(format) {
        try{
            if (!this.#formats.includes(format)){
                throw new Error('Format must be a string and one of the following: PDF, EPUB, MOBI');
            }
            this._format = format;
        } catch (error) {
            console.log(error); 
        }
       
    }  

static fromBook(book,format) {
    return new EBook(book.title, book.author, book.year, format);
}

    printInfo() {
        console.log(`${this.title} ${this.author} ${this.year} ${this.format}`);
}

}
