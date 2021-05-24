import React from "react";
import { Component } from "react";
import ChangeShelf from "./ChangeShelf";


class SingleBook extends Component{

    render(){
        const {book, books, changeShelf} = this.props;

        return(
                <li>
                    <div className="book" key={book.title}>
                        <div className="book-top">
                            <div className="book-cover" style={book.imageLinks && book.imageLinks.smallThumbnail 
                                ? { width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`} 
                                : {}}></div>
                                <div className="book-shelf-changer">
                                    <ChangeShelf book={book} books={books} changeShelf={changeShelf}/>
                                </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                              <div className="book-authors">
                              {
                                  book.authors && 
                                    book.authors.map(author=>(
                                    author+' '
                                  ))
                              }                                  
                              </div>
                                
                    </div>
                
                </li>
            )
        }
}

export default SingleBook;