import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
const Movies = lazy(() => import('pages/Movies'));
// import Movies from 'pages/Movies';
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// import MovieDetails from './MovieDetails/MovieDetails';
const Cast = lazy(() => import('./Cast/Cast'));
// import Cast from './Cast/Cast';
const Reviews = lazy(() => import('./Reviews/Reviews'));
// import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>

      <Route path="*" element={<p>404 page not found</p>}></Route>
    </Routes>
  );
};
