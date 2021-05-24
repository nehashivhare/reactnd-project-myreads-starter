import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SingleBook from './SingleBook'

class BooksApp extends React.Component {

  state = {
    search:[],
    query: '',
    books: [] 
  }

  componentDidMount(){
    
    BooksAPI.getAll().then(res => {
      this.setState({
        books: res
      })
      console.log(res)
    });

  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf)
    .then(res => {
      console.log(res)
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== changedBook.id)
          .concat(changedBook)
      }));
    });
  };


  searchBooks = (event) => {
    const query = event.target.value
    BooksAPI.search(query.trim())
    .then(res=> {
      this.setState({
        query: query,
        search: res
      })
      console.log(this.state.search)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={()=>(
          <div className="search-books">
            <div className="search-books-bar">
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange = {this.searchBooks}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.search && this.state.search.length > 0 
                ? this.state.search.map(book=>(
                      <SingleBook key={book.title} book={book} books={this.state.books} changeShelf={this.changeShelf}/>
                      )
                    )
                : this.state.query && this.state.query.length > 0
                ? <div><h4>Sorry! Query didn't match any books</h4></div> 
                : null
              }
              </ol>
            </div>
            <div className="open-search">
            <Link to = '/'>Home</Link>
            </div>
          </div>
        )} />
        <Route exact path='/' render={()=>(
          <div>
            <div> 
              {
                 <BookList books={this.state.books} changeShelf={this.changeShelf}/>
              }
            </div>
            <div className="open-search">
              <Link to = '/search'>Search</Link>
            </div> 
          </div>
        )} />
        </div>
    )
  }
}

export default BooksApp
