import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlayListAddIcon from '@material-ui/icons/PlaylistAdd'

const AddMovieToMustWatchIcon = ({ movie }) => {

    const context = useContext(MoviesContext);
    const handleAddMovieToMustWatch = (e) => {
      e.preventDefault();
      context.addMovieToMustWatch(movie);
    };
    return (
      <IconButton aria-label="add movie to must-watch" onClick={handleAddMovieToMustWatch} >
        <PlayListAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };
  
  export default AddMovieToMustWatchIcon; 