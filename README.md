# Assignment 1 - ReactJS app.

Name: Robert Jacob

## Overview.

ReactJS project for a movie viewer application similar to imdb.

### Features.
 
+ Authentication with Firebase - Sign Up and Log In
+ Public and Private routes
+ Top Rated View
+ Now Playing view
+ Actor View
+ Account Page to view login used

## Setup requirements.

The following commands may be required :
```
 npm install firebase
 npm i bootstrap react-bootstrap
 ```

## API endpoints.

+ Top Rated Movies - GET /movie/top_rated
+ Now Playing Movies - GET /movie/now_playing
+ Actors - GET /person/popular
+ Actor - GET /person/:id
+ Actor - GET /prson/:id/images
+ Upcoming Movies - GET /movie/upcoming

## App Design.

### Component catalogue.

### UI Design.

[ Insert screenshots of the __new/modified app pages__ you developed (and modified existing pages), Include an appropriate caption for each one (see example below).

![image](/images/login.png)

>Login Page with public route, user logs in with authenticated email and password.

![image](/images/signup.png)

>Signup page with public route, user signs up with email and password.

![image](/images/profile.png)

>Profile page with private route, displays account details.

![image](/images/upcoming.png)

>Upcoming movies page with private route, displays movies coming out soon.

![image](/images/topRated.png)

>Top Rated movies page with private route, displays movies with the highest rating on tmdb.

![image](/images/nowPlaying.png)

>Now Playing movies page with private route, displays movies currently playing.

![image](/images/actors.png)

>Actors page with private route, displays actors and their ratings.


### Routing.

+ / - login page.                            (public route)
+ /actors - list of actors.                  (private route)
+ /movies/upcoming - Upcoming movies.        (private route)
+ /movies/topRated - Top Rated movies.       (private route)
+ /movies/now_playing - Movies now Playing.  (private route)
+ /account - Account page.                   (private route)


## Independent learning (If relevant).

![image](/images/firebase.png)

>Firebase Authentication UI

### References for implementation of firebase Authentication

+ [Firebase - Documentation](https://firebase.google.com/docs?gclid=CjwKCAiAksyNBhAPEiwAlDBeLFmJbo_e3-ogmR35UAUMkE9IIanL7VSwEQbkimCxlwelRP1Ae2hmqBoC1H8QAvD_BwE&gclsrc=aw.ds)
+ [Web Dev Simplified - YouTube](https://youtu.be/PKwu15ldZ7k)
+ [Log Rocket - blog](https://blog.logrocket.com/user-authentication-firebase-react-apps/)

