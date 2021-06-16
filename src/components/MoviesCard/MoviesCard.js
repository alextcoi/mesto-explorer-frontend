import './MoviesCard.css';
import movieImg from '../../images/movie.png';
import savedIcon from '../../images/save.png';

function MoviesCard(props) {
    return (
        <section className="moviescard">
            <figure className="moviescard__item">
                <img className="moviescard__img" src={movieImg} alt="Кадр из фильма"/>
                <p className="moviescard__text">33 слова о дизайне</p>
            </figure>
            <button onClick={props.onClick} className="moviescard__save">Сохранить</button>
            <img className="moviescard__saved" src={savedIcon} alt="Галочка"/>
            <p className="moviescard__dur">1ч 17м</p>
        </section>

    );
}

export default MoviesCard;