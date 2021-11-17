import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getNowPlaying} from "../api/tmdb-api"
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const NowPlayingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('NowPlayingMovies', getNowPlaying)

  if (isLoading) {
    return <Spinner />
  }if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  const addToMustWatch = (movieId) => true 
   return (
      <PageTemplate
        title="Now Playing Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />
  );
};

export default NowPlayingPage; 