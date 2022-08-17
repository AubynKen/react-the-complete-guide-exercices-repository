import React from "react";
import { useParams } from "react-router-dom";

const Book: React.FC = (props) => {
  const { id } = useParams();

  return <p>Book title: {id}</p>;
};

export default Book;
