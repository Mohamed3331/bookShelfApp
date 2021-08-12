import React from "react";
import BookList from '../Components/BookList'
import Button from '../Components/Button'
import ".././App.css";

function MainPage(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
            <BookList getData={props.getData} Books={props.Books} ShelfTitle="currentlyReading"/>
            <BookList getData={props.getData} Books={props.Books} ShelfTitle="wantToRead" />
            <BookList getData={props.getData} Books={props.Books} ShelfTitle="read"/>
            <Button/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
