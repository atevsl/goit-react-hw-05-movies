import Nav from 'components/Nav/Nav';
import SearchForm from 'components/SearchForm/SearchForm';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  return (
    <>
      <Nav />
      <SearchForm
        searchMovies={searchMovies}
        search={search}
        setSearchMovies={setSearchMovies}
        setSearch={setSearch}
      />
      <Outlet />
    </>
  );
};
export default Movies;
