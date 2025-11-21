// Basic book issuing system
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() { this.isIssued = true; }

    returnBook() { this.isIssued = false; }
}

const library = [
    new Book("Clean Code", "Robert Martin", "111"),
    new Book("Atomic Habits", "James Clear", "222"),
    new Book("JS Guide", "Kyle Simpson", "333")
];

console.log("Available books:");
library.filter(b => !b.isIssued).forEach(b => console.log(b.title));

function issueByISBN(code) {
    const book = library.find(b => b.isbn === code);
    if (book) {
        book.issueBook();
        console.log("Issued:", book.title);
    }
    else {
        console.log("Book not found");
    }
}

issueByISBN("222");
