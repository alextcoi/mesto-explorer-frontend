import './MoviesCard.css';
import movieImg from '../../images/movie.png';
import savedIcon from '../../images/save.png';
import removeIcon from '../../images/remove.png';
import { useLocation } from 'react-router-dom';
import { useState } from "react";

function MoviesCard() {
    const location = useLocation();
    const [showedSavedIcon, setShowedSavedIcon] = useState("moviescard__hidden");
    const [showedSaveIcon, setShowedSaveIcon] = useState("");
    let hiddenSaveIcon;
    let hiddenRemoveIcon;

    if (location.pathname === "/saved-movies") {
        hiddenSaveIcon = "moviescard__hidden";
    } else {
        hiddenRemoveIcon = "moviescard__hidden";
    }

    function onClick() {
        setShowedSavedIcon("moviescard__visible");
        setShowedSaveIcon("moviescard__hidden");
    }

    return (
        <section className="moviescard">
            <figure className="moviescard__item">
                <img className="moviescard__img" src={movieImg} alt="Кадр из фильма"/>
                <p className="moviescard__text">33 слова о дизайне</p>
            </figure>
            <button onClick={onClick} className={`moviescard__save ${hiddenSaveIcon} ${showedSaveIcon}`}>Сохранить</button>
            <img className={`moviescard__saved ${showedSavedIcon}`} src={savedIcon} alt="Галочка"/>
            <img className={`moviescard__remove ${hiddenRemoveIcon}`} src={removeIcon} alt="Крестик"/>
            <p className="moviescard__dur">1ч 17м</p>
        </section>

    );
}

export default MoviesCard;