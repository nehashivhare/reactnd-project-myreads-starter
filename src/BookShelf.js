import React, {Component} from 'react';
import SingleBook from './SingleBook';

// sort the books into its shelf
// needs bookShelf property
class BookShelf extends Component {
  
    render(){
      const { books, changeShelf } = this.props;

      return(
        books.map(book=>{
          return(
            <ol className="books-grid" key={book.id}>
              <SingleBook book={book} books={books} key={book.id} changeShelf={changeShelf}/>
            </ol>
          )
        })
              
        )
    }
}

export default BookShelf;