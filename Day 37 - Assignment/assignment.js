let books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        publicationYear: 1925,
        rating: 4.2,
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        publicationYear: 1960,
        rating: 4.5,
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        publicationYear: 1937,
        rating: 4.3,
    }
];

const [book1, book2, book3] = books;

// console.log(book1);
// console.log(book2);
// console.log(book3);

const { title, author, publicationYear } = book2
console.log(`Book 2 : ${title} by ${author}, published in ${publicationYear}`);


const book4 = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K Rowling',
    genre: 'Fantasy',
    publicationYear: 1997,
    rating: 4.7,
}

books = [...books,book4]
console.log(books);

const copiedBooks = [...books]
// console.log(copiedBooks);