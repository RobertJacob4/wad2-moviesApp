import React from "react";
import PlayListAddIcon from '@material-ui/icons/PlaylistAdd'
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from "../api/tmdb-api"
import AddMovieToMustWatchIcon from "../components/cardIcons/addMovieToMustWatch";

const UpcomingMoviesPage = (props) => {
  const {data, error, isLoading, isError}  = useQuery('upComingMovie', getUpcomingMovies)
  if (isLoading) {
    return <Spinner />
  } if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  const addMovieToMustWatch = (movieId) => true 
   return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddMovieToMustWatchIcon movie={movie} />
         // return <PlayListAddIcon movie={movie} />
        }}
      />
  );
};
export default UpcomingMoviesPage;