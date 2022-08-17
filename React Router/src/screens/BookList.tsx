import React from "react";
import { Link } from "react-router-dom";

const BookList: React.FC = () => {
  return (
    <ul>
      {["1", "2", "3", "4"].map((id) => {
        return (
          <li key={id}>
            <Link to={`/books/${id}`}>Book {id}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;