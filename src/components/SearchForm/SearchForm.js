import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm(props) {
    return (
        <section className="searchform">
            <form className="searchform__bar" onSubmit={props.onSubmit}>
                <input className="searchform__input" type="text" placeholder="Фильм"/>
                <button type="submit" className="searchform__button"/>
            </form>
            <FilterCheckBox/>
        </section>
    );
}

export default SearchForm;