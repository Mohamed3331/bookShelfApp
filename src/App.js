import React, {useState, useEffect} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './Pages/MainPage'
import AddBookPage from './Pages/AddBookPage'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function BooksApp () {
  const [books, setBooks] = useState([])

  const getData = () => {
    BooksAPI.getAll().then((result) => {
      setBooks(result)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.books !== this.state.books) {
  //     BooksAPI.getAll().then((result) => {
  //       this.setState({books: result})
  //     }).catch((error) => {
  //       console.log(error);
  //     })
  //   }
  // }
    return (
      <React.Fragment>
      <div className="app">
         <BrowserRouter>
            <Switch> 
              <Route exact path="/">
                <MainPage Books={books} getData={getData} /> 
              </Route> 
              <Route exact path="/search"> 
                <AddBookPage Books={books} getData={getData}/> 
              </Route> 
          </Switch>
         </BrowserRouter> 
      </div>
      </React.Fragment>
    )
}

export default BooksApp
