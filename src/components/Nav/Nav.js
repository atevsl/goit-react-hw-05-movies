import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </header>
    </>
  );
};
export default Nav;
