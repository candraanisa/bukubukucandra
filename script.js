const books = [
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        status: "read",
        cover: "fotok/crimeandpunishment.jpg"
    },
    {
        title: "Normal People",
        author: "Sally Rooney",
        status: "read",
        cover: "fotok/normalpeople.jpg"
    },
    {
        title: "Giovanni's Room",
        author: "James Baldwin",
        status: "to-be-read",
        cover: "fotok/giovannisroom.jpg"
    },
    {
        title: "The Year of Magical Thinking",
        author: "Joan Didion",
        status: "to-be-read",
        cover: "fotok/theyearofmagicalthinking.jpg"
    }
];      

const readBooksContainer = document.querySelector("#read .books-grid");
const tobereadBooksContainer = document.querySelector("#to-be-read .books-grid");

function createBookCard(book) {
    const bookCard = document.createElement("article");
    bookCard.className = "book-card";

    const cover = document.createElement("img");
    cover.src = book.cover;
    cover.alt = book.title;
    cover.className = "book-cover";

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;

    bookCard.append(cover, title, author);
    return bookCard;
}

books.forEach(function (book){
    const bookCard = createBookCard(book);
    if (book.status === "read" && readBooksContainer){
        readBooksContainer.append(bookCard);
    } else if (book.status === "to-be-read" && tobereadBooksContainer) {
        tobereadBooksContainer.append(bookCard);
    }

});