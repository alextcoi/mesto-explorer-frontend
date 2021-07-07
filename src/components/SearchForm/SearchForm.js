import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useEffect, useState } from 'react';

function SearchForm({onMovieSearch, onInputClick, searchWord}) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (searchWord) {
            setSearch(searchWord);
        }
    }, [searchWord]);

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