import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTopRated} from "../api/tmdb-api"
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const TopRatedPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('topMovies', getTopRated)

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
        title="Top Rated Movies"
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchIcon movie={movie} />
        }}
      />
  );
};

export default TopRatedPage;