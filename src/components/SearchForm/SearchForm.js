import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useState } from 'react';

function SearchForm({onMovieSearch, onInputClick}) {
    const [search, setSearch] = useState('');

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onMovieSearch({
            movie: search,
        });
    }

    return (
        <section className="searchform">
            <form className="searchform__bar" onSubmit={handleSubmit}>
                <input className="searchform__input" type="text" placeholder="Фильм" value={search} onChange={handleSearch} required/>
                <button type="submit" className="searchform__button"/>
            </form>
            <FilterCheckBox
                onInputClick={onInputClick}
            />
        </section>
    );
}

export default SearchForm;