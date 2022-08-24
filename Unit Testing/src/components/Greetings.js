import React, { useEffect, useState } from 'react';

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts';

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);
  const [posts, setPosts] = useState([]);

  const clickHandler = () => {
    setChangedText(true);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(POST_API_URL);
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts().then();
  }, []);

  return (<div>
    <h2>Hello, World</h2>
    {!changedText && <p>Click button to change</p>}
    {changedText && <p>Greetings!</p>}
    <button onClick={clickHandler}>Click</button>

    <ul id="posts">
      {posts.map(el => {
        return <li key={el.id}>{el.title}</li>;
      })}
    </ul>
  </div>);
};

export default Greetings;