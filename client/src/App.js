import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import SavedList from './Movies/SavedList';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div className='links'>
        <Link to='/'>List of Movies</Link>
        <Link to='/movies-list'>Movie</Link>
      </div>
    
    
      <Switch>
        <Route path='/'>
          <MovieList items={movieList} />
        </Route>
        <Route path={'/movies-list/:itemID'}>
          <Movie items={movieList} />
        </Route>

      </Switch>
    </div>
  )
  }
