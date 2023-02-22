import Nav from 'components/Nav/Nav';
import { useState } from 'react';
import { generatePath, Link, Outlet } from 'react-router-dom';
import { onFetchSearch } from 'services/API';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const onInputHendler = e => {
    setSearch(e.currentTarget.value);
  };

  const onSubmitHendler = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return console.log('there are no such movie');
      // Notiflix.Notify.failure('Please type search and try again.');
    }
    onFetchSearch(search).then(({ data }) => {
      setSearchMovies(data.results);
    });
  };

  return (
    <>
      <Nav />
      <form onSubmit={onSubmitHendler}>
        <input type="text" name="search" onChange={onInputHendler} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchMovies &&
          searchMovies.map(item => {
            return (
              <li key={item.id}>
                <Link
                  to={generatePath('/movies/:movieId/cast', {
                    movieId: item.id,
                  })}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </>
  );
};
export default Movies;
