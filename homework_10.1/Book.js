export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
}

get title() {
    return this._title;
}
get author() {
    return this._author;
}
get year() {
    return this._year;
}

set title(title) {
    try {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string'); 
        }
        this._title = title;
    } catch (error) {
        console.log(error);
    } 
}

set author(author) {
    try{
        if (typeof author !== 'string'){
            throw new Error('Author must be a string');
        }
        this._author = author;
    } catch (error) {
        console.log(error);
    }
}

set year(year) {
    try{
        if (typeof year !== 'number'){
            throw new Error('Year must be a number');
        }
        this._year = year;
    } catch (error) {
        console.log(error);
    }

}

static oldestBook(books) {
    return books.sort((a, b) => a.year - b.year)[0];
}


printInfo() {
    console.log(`${this.title} ${this.author} ${this.year}`);
}

}

