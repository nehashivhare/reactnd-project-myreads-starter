import React from 'react';
import BookShelf from './BookShelf';

const BookList = props => {
  const { books, changeShelf} = props;
  const bookShelf = [
    { state: 'currentlyReading', name: 'Currently Reading' },
    { state: 'wantToRead', name: 'Want to Read' },
    { state: 'read', name: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {bookShelf.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.state);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <BookShelf books={shelfBooks} changeShelf={changeShelf}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;