import React from "react";
import Book from './Book'
import ".././App.css";

export default function BookList(props) {
  return (
    <>
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.ShelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.Books.map(book => {
                if (props.ShelfTitle === book.shelf) {
                  return (
                    <Book getData={props.getData} key={book.id} {...book}/>
                  )
                }
                return null
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
