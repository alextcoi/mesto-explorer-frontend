import './MoviesCard.css';
import savedIcon from '../../images/save.png';
import removeIcon from '../../images/remove.png';
import imageURL from '../../utils/utils';
import { useLocation } from 'react-router-dom';
import { useState } from "react";

function MoviesCard({movie, onDeleteMovie, onSaveMovie, status}) {
    const location = useLocation();
    const [showedSavedIcon, setShowedSavedIcon] = useState("moviescard__hidden");
    const [showedSaveIcon, setShowedSaveIcon] = useState("");
    let displayDuration;
    let hiddenSaveIcon;
    let hiddenRemoveIcon;
    let statusClass;

    if (movie.duration < 60) {displayDuration = `${movie.duration}мин`}
        else if (movie.duration === 60) {displayDuration = `${movie.duration}ч`}
        else {displayDuration = `${Math.floor(movie.duration/60)}ч ${movie.duration - Math.floor(movie.duration/60)*60}мин`}

    if (location.pathname === "/saved-movies") {
        hiddenSaveIcon = "moviescard__hidden";
    } else {
        hiddenRemoveIcon = "moviescard__hidden";
    }

    if (status) {
        statusClass = 'moviescard__visible';
        hiddenSaveIcon = 'moviescard__hidden';
    }

    function handleSaveClick() {
        onSaveMovie(movie);
        setShowedSavedIcon("moviescard__visible");
        setShowedSaveIcon("moviescard__hidden");
    }

    function handleDeleteClick() {
        onDeleteMovie(movie);
    }

    return (
        <section className="moviescard">
            <a target="_blank" rel="noreferrer" href={movie.trailerLink}>
                <div className="moviescard__item" style={{backgroundImage: `url(${imageURL + movie.image.url})`}}/>
            </a>
            <button onClick={handleSaveClick} className={`moviescard__save ${hiddenSaveIcon} ${showedSaveIcon}`}>Сохранить</button>
            <img className={`moviescard__saved ${showedSavedIcon} ${statusClass}`} src={savedIcon} alt="Галочка"/>
            <button className={`moviescard__remove-container ${hiddenRemoveIcon}`} onClick={handleDeleteClick}>
                <img className={`moviescard__remove`} src={removeIcon} alt="Крестик"/>
            </button>
            <div className="moviescard__descrip">
                <p className="moviescard__text">{movie.nameRU}</p>
                <p className="moviescard__dur">{displayDuration}</p>
            </div>
        </section>

    );
}

export default MoviesCard;