import css from './SearchForm.module.css';

const SearchForm = ({ onInputHendler, onSubmitHendler, search }) => {
  return (
    <>
      <form onSubmit={onSubmitHendler}>
        <input
          value={search || ''}
          type="text"
          name="search"
          onChange={onInputHendler}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </>
  );
};
export default SearchForm;
