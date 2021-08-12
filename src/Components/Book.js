import React, {useState} from "react";
import * as BooksAPI from '../BooksAPI'

import ".././App.css";
// imageLinks - thumbnail   authors      title
export default function Book({imageLinks, authors, title, shelf, id, getData}) {
  const [newBookShelf, setNewBookShelf] = useState(shelf)
  
  const updateShelf = async (e) => {
    setNewBookShelf(newBookShelf)
    await BooksAPI.update(id,e.target.value).then(result => {
      console.log(result);
    })
    getData()
  }

  return (
    <>
      <div>
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 174,
                  backgroundImage: `url(${imageLinks.thumbnail})`,
                }}
              ></div>
              <div className="book-shelf-changer">
                <select value={newBookShelf} onChange={updateShelf}>
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.map((author,index) => (
              <div key={index}>{author}</div>
            ))}</div>
          </div>
        </li>
      </div>
    </>
  );
}
