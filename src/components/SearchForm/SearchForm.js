import css from './SearchForm.module.css';

const SearchForm = ({ onSubmitHendler }) => {
  return (
    <>
      <form
        name="form"
        onSubmit={e => {
          e.preventDefault();
          onSubmitHendler(document.forms.form.elements.search.value);
        }}
      >
        <input type="text" name="search" className={css.searchInput} />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </>
  );
};
export default SearchForm;
