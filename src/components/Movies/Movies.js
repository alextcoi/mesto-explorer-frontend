import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';

function Movies({items, savedItems}) {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState('');
    const [inputChecked, setInputChecked] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            setMovies(items);
            setSpinner(false);
        }, 1000)
    }, [items]);

    function handleMovieSearch(movie) {
        setMovie(movie);
    }

    function handleInputCheck() {
        setInputChecked(prevCheck => !prevCheck);
    }

    function handleSaveMovie(movie) {
        const token = localStorage.getItem("token");
        mainApi
            .postMovie(movie, token)
            .then((res) => {console.log(res)})
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className="movies">
            <SearchForm
                onMovieSearch={handleMovieSearch}
                onInputClick={handleInputCheck}
            />
            {spinner ? <Preloader/> : null}
            <MoviesCardList
                movie={movie}
                moviesList={movies}
                userMovies={savedItems}
                inputCheck={inputChecked}
                onSaveMovie={handleSaveMovie}
                preloader={spinner}
            />
        </section>
    );
}

export default Movies;