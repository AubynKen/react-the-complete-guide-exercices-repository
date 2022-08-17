import React from "react";
import "./App.css";
import { Routes, Route, Link} from "react-router-dom";
import Welcome from "./screens/Welcome";
import NewBook from './screens/NewBook';
import Book from './screens/Book';
import BookList from './screens/BookList';

const App: React.FC = () => {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to='/book'>Books</Link>
            </li>
            <li>
              <Link to={`/book/new`}>New Book</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/book/new' element={<NewBook/>}/>
          <Route path='/book/' element={<BookList/>}/>
          <Route path='/book/:id' element={<Book/>}/>
          <Route path="/" element={<Welcome/>}/>
        </Routes>
      </>
  );
};

export default App;
