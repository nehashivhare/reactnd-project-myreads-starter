import React, { Component } from "react";



class ChangeShelf extends Component{
    
    render(){
        const {book, books} = this.props;

        // Searched books have none shelf property
        let currentShelf = 'none';

        for (let item of books) {
            if (item.id === book.id) {
            currentShelf = item.shelf;
            break;
            }
        }
        return(
            <select onChange={(event)=>{
                this.props.changeShelf(book, event.target.value)
            }} 
            defaultValue={currentShelf}
            >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        )
    }
}

export default ChangeShelf;