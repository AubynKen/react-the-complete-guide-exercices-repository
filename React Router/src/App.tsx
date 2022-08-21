import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./screens/Welcome";
import NewBook from "./screens/NewBook";
import Book from "./screens/Book";
import BookList from "./screens/BookList";

const App: React.FC = () => {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/book">Books</Link>
            </li>
            <li>
              <Link to={`/book/new`}>New Book</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/books">
            <Route index element={<BookList/>}/>
            <Route path=":id" element={<Book/>}/>
            <Route path="new" element={<NewBook/>}/>
          </Route>
          <Route path="/" element={<Welcome/>}/>
        </Routes>
      </>
  );
};

export default App;
