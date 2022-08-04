import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

const checkResponseStatus = (response) => {
  if (response.ok) return;
  throw new Error('Oups, something went wrong!');
};

const IDLE = 'idle';
const LOADING = 'loading';
const ERROR = 'error';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [state, setState] = useState(IDLE); // 'idle' || 'loading' || 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMoviesHandler = useCallback(async () => {
    setState(LOADING);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      checkResponseStatus(response);
      const data = await response.json();
      const movies = data.results.map(({ episode_id, title, opening_crawl, release_date }) => ({
        id: episode_id, title, openingText: opening_crawl, releaseDate: release_date,
      }));
      setMovieList(movies);
      setState(IDLE);
    } catch (err) {
      setState(ERROR);
      setErrorMessage(err.message);
    }
  }, [checkResponseStatus]);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  return (
      <React.Fragment>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          {(state === LOADING) ? <p>'Loading...'</p> :
              (state === ERROR) ? <p>{errorMessage}</p> :
                  <MoviesList movies={movieList}/>}
        </section>
      </React.Fragment>
  );
};

export default App;
