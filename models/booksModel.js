const db = require("../db");
const dateNow = new Date().toString();

const defaultBooks = [
  {
    author: "Rahul Sharma",
    title: "Books of fire",
    genre: "Drama",
    publishedDate: dateNow,
    available: true,
  },
  {
    author: "Rohit Devgand",
    title: "Into waters",
    genre: "Horor",
    publishedDate: dateNow,
    available: false,
  },
  {
    author: "ahit Devgand",
    title: "Into waters2",
    genre: "Horor",
    publishedDate: dateNow,
    available: false,
  },
];
class BooksModel {
  addBookBulk(books, callback) {
    let insertBulkBooksQuery = `INSERT INTO books (author, title, genre) VALUES`;
    books.map((book) => {
      insertBulkBooksQuery += ` ('${book.author}', '${book.title}', '${book.genre}' )`;
    });
    insertBulkBooksQuery += `;`;
    db.query(insertBulkBooksQuery, callback);
  }
  addBook(book, callback) {
    const insertBooksQuery = `INSERT INTO books (author, title, genre,publishedDate,available) VALUES('${book.author}', '${book.title}', '${book.genre}' , '${book.publishedDate}', ${book.available})`;
    //console.log("Adding Books", insertBooksQuery);
    db.query(insertBooksQuery, callback);
  }
  getBooks(filter, callback) {
    //Filter query
    let filterQuery = null;
    let getBooksQuery = `SELECT * FROM books`;
    if (filter.title) {
      filterQuery = ` title like '%${filter.title}%' `;
    }
    if (typeof filter.author !== "undefined") {
      if (filterQuery) {
        filterQuery += ` and author like '%${filter.author}%' `;
      } else {
        filterQuery = ` author like '%${filter.author}%' `;
      }
    }
    if (typeof filter.genre !== "undefined") {
      if (filterQuery) {
        filterQuery += ` and genre like '%${filter.genre}%' `;
      } else {
        filterQuery = ` genre like '%${filter.genre}%' `;
      }
    }
    if (typeof filter.available !== "undefined") {
      if (filterQuery) {
        filterQuery += ` and available=${filter.available}`;
      } else {
        filterQuery = ` available=${filter.available}`;
      }
    }
    if (filterQuery) {
      filterQuery = ` where ` + filterQuery;
      getBooksQuery += filterQuery;
    }

    db.query(getBooksQuery, callback);
  }
  initializeTable(callback) {
    db.query("DROP TABLE IF EXISTS books;", callback);
    db.query(
      "CREATE TABLE books (bookID int NOT NULL AUTO_INCREMENT,Author varchar(50) not null,Title varchar(100) not null,PublishedDate date, Genre varchar(20),Available bool, PRIMARY KEY (bookid));",
      callback
    );
    //Add Default Data

    defaultBooks.map((book) => {
      this.addBook(book, (err, results) => {
        if (err) {
          console.log("Error while adding data", err);
        } else {
          //console.log("Data added suscessfully", results);
        }
      });
    });

    //const insertBulkDefaultBooksQuery = `INSERT INTO books (author, title, genre, publishedDate, available) VALUES('Author1', 'Title1', 'genre1', ),('Author2', 'Title2', 'genre2' ),('Author3', 'Title3', 'genre3' ),('Author4', 'Title4', 'genre4' );`;
    //const res = db.query(insertBulkDefaultBooksQuery, callback);
  }
  getAllUsers(callback) {
    db.query("SELECT * FROM users", callback);
  }

  getUserById(userId, callback) {
    db.query("SELECT * FROM users WHERE id = ?", [userId], callback);
  }

  createUser(user, callback) {
    db.query("INSERT INTO users SET ?", [user], callback);
  }

  updateUser(userId, updatedUser, callback) {
    db.query(
      "UPDATE users SET ? WHERE id = ?",
      [updatedUser, userId],
      callback
    );
  }

  deleteUser(userId, callback) {
    db.query("DELETE FROM users WHERE id = ?", [userId], callback);
  }
}

module.exports = new BooksModel();
