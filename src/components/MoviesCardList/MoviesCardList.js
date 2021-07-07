import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCardList({moviesList, userMovies, movie, inputCheck, onSaveMovie, onDeleteMovie, preloader}) {
    const location = useLocation();

    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    });

    let userMoviesId;
    if (location.pathname === '/movies') {
        userMoviesId = userMovies.map(item => item.movieId);
    } else {
        userMoviesId = [];
    }

    const [nextElement, setNextElement] = useState(0);
    const [lastElement, setLastElement] = useState(0);

    function debounce(fn, ms) {
        let timer
        return _ => {
          clearTimeout(timer)
          timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
          }, ms)
        };
    }

    function handleClick() {
        setNextElement(nextElement + 1);
    }

    let durationLimit;
    inputCheck ? durationLimit = 40 : durationLimit = 1000;

    let renderList;
    
    if (location.pathname === '/saved-movies' && movie) {
        renderList = moviesList
                        .filter(item =>
                            item.nameRU.toLowerCase().includes(movie.movie.toLowerCase()) && item.duration < durationLimit)
    } else if (location.pathname === '/saved-movies') {
        renderList = moviesList.filter(item =>
            item.duration < durationLimit)
    } else if (movie) {
        renderList = moviesList
                        .filter(item =>
                            item.nameRU.toLowerCase().includes(movie.movie.toLowerCase()) && item.duration < durationLimit)
                        .slice(0, (nextElement + 1) * lastElement);
    } else {
        renderList = moviesList
                        .filter(item =>
                            item.duration < durationLimit)
                        .slice(0, (nextElement + 1) * lastElement);
    }

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }, 1000)

        if (dimensions.width >= 320 && dimensions.width <= 480) {
            setNextElement(4);
            setLastElement(1);
            } else if (dimensions.width > 480 && dimensions.width < 1280) {
                setNextElement(3);
                setLastElement(2);
                } else {
                    setNextElement(3);
                    setLastElement(3);
                }
    
        window.addEventListener('resize', debouncedHandleResize)
    
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
        
        }
    }, [dimensions.width, movie, inputCheck, userMovies]);

    return (
        <section className="moviescardlist">
            {preloader
            ?   <p className="moviescardlist__null"></p>
            :   renderList.length > 0
            ?   <div className="moviescardlist__container">
                    {
                        renderList.map((item) => {
                            return (<MoviesCard
                                    key={location.pathname === '/movies' ? item.id : item._id}
                                    movie={item}
                                    onDeleteMovie={onDeleteMovie}
                                    onSaveMovie={onSaveMovie}
                                    status={
                                        (userMoviesId.includes(item.id))
                                        ? true
                                        : false
                                    }
                                />)}
                        )
                    }
                </div>
            : <p className="moviescardlist__null">Ничего не найдено</p>}
            {(renderList.length > lastElement && (nextElement * lastElement) < renderList.length) 
                ? <button className={`moviescardlist__more ${
                    location.pathname === '/saved-movies'
                    ? 'moviescardlist__more_hidden'
                    : ''
                }`} onClick={handleClick}>Ещё</button>
                : null}
        </section>
    );
}

export default MoviesCardList;