
// Javascript Project 9b - The Reading List

var Book = function (title="", author="", alreadyRead=false) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
}
Book.prototype.logBook = function() {
    if (this.alreadyRead){
        document.write(`<p>You already read "${this.title}" by ${this.author}.</p>`);
    } else {
        document.write(`<p>You still need to read "${this.title}" by ${this.author}.</p>`);
    }
}

var book1 = new Book("The Hobbit", "J.R.R. Tolkien", true);
var book2 = new Book("The Singularity Is Near", "Ray Kurzweil", true);
var book3 = new Book("Forever War", "Joe Haldeman", true);
var book4 = new Book("All The Pretty Horses", "Cormac McCarthy", false);
var book5 = new Book("Clean Code", "Robert C. Martin", false);
var book6 = new Book("We Have Always Lived in the Castle", "Shirley Jackson",false);
var book7 = new Book("I, Robot", "Isaac Asimov", true);

var bookList = [book1, book2, book3, book4, book5, book6, book7];

function printBookList() {
    for (var i = 0; i < bookList.length; i++) {
        bookList[i].logBook();
    }
}

printBookList();



