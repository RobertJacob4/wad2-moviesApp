import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieDetailsPage from './pages/movieDetailsPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import MoviesContextProvider from "./contexts/moviesContext";
import { ReactQueryDevtools } from 'react-query/devtools';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopRatedPage from "./pages/topRatedPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import signIn from "./pages/signInPage";
import "bootstrap/dist/css/bootstrap.min.css"
import PrivateRoute from "./components/userAuth/privateRoute";
import accountStatePage from "./pages/accountStatePage";
import ActorsPage from "./pages/actorsPage";



const CPimages = [
  "/rjBwhsOzHKUw2NIOrE7aMqjfe6s.jpg",
  "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  "/2iGN0aKHJYD0xQydlfuCUAcgNbO.jpg",
  "/v1QQKq8M0fWxMgSdGOX1aCv8qMB.jpg",
]

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
        <Route exact path="/movies/home" component={HomePage}/>
        <PrivateRoute exact path="/actors" component={ActorsPage}/>
        <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
        <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <PrivateRoute exact path="/movies/topRated" component={TopRatedPage} />
        <PrivateRoute exact path="/movies/now_playing" component={NowPlayingPage} />
        <PrivateRoute path="/movies/:id" component={MoviePage} />
        <PrivateRoute path="/account" component={accountStatePage} />
        <Route exact path="/" component={signIn} />
        <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));