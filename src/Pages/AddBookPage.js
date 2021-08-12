import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import Book from '../Components/Book'
import ".././App.css";

function AddBookPage({Books, getData}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [myResults, setMyResults] = useState();
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
   }

  const onKeyPress = async (e) => {
    if (e.key === 'Enter'){
      const response = await BooksAPI.search(searchQuery, 20)
      if (response && response.error) {
        setMyResults([])
      }
      setMyResults(response)
    }
    
  }

  useEffect(() => {
    setMyResults(Books)
  }, [Books])

  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <div onClick={handleClick} className="close-search"/>
          <div className="search-books-input-wrapper">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search by title or author"
              onKeyPress={onKeyPress}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {Array.isArray(myResults) && myResults.length > 0  && myResults.map((book,index) => <Book getData={getData} {...book} key={index}/>)}
          </ol>
        </div>
      </div>
    </>
  );
}
export default AddBookPage;
