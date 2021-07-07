import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect, useState, useContext } from 'react';

function SavedMovies({ onUpdate }) {
    const userData = useContext(CurrentUserContext);
    const [savedMovies, setSavedMovies] = useState([]);
    const [savedMovie, setSavedMovie] = useState('');
    const [inputChecked, setInputChecked] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            if (localStorage.getItem("token")) {
                const token = localStorage.getItem("token");
                if (token) {
                  mainApi
                    .getItems(token)
                    .then((res) => {
                        setSavedMovies(res.filter(item => item.owner === userData._id));
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                }
              }
            setSpinner(false);
        }, 1000)
    }, [userData]);

    useEffect(() => {
        if (localStorage.getItem('moviesave')) {
            const search = JSON.parse(localStorage.getItem('moviesave'));
            setSavedMovie(search);
        }
    }, []);

    function handleMovieSearch(movie) {
        setSavedMovie(movie);
        localStorage.setItem('moviesave', JSON.stringify(movie));
    }

    function handleInputCheck() {
        setInputChecked(prevCheck => !prevCheck);
    }

    function handleDeleteMovie(item) {
        const token = localStorage.getItem("token");
        mainApi
            .deleteMovie(item._id, token)
            .then((res) => {
                setSavedMovies(savedMovies.filter(item => item._id !== res._id));
                onUpdate(savedMovies.filter(item => item._id !== res._id));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className="movies">
            <SearchForm
                searchWord={savedMovie.movie}
                onMovieSearch={handleMovieSearch}
                onInputClick={handleInputCheck}
            />
            {spinner ? <Preloader/> : null}
            <MoviesCardList
                movie={savedMovie}
                moviesList={savedMovies}
                inputCheck={inputChecked}
                onDeleteMovie={handleDeleteMovie}
                preloader={spinner}
            />
        </section>
    );
}

export default SavedMovies;