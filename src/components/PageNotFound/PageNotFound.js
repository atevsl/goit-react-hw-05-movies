import { Link } from 'react-router-dom';
import css from './PageNotFound.module.css';
import pnf from '../../img/pnf.jpg';

const PageNotFound = () => {
  return (
    <div className={css.wrap}>
      <img src={pnf} alt="404 page not found" className={css.pnf}></img>
      <b>
        Sorry, the page not found. The link you followed broken or the page has
        been removed.
      </b>
      <Link to="/" className={css.link}>
        Go Home
      </Link>
    </div>
  );
};
export default PageNotFound;
