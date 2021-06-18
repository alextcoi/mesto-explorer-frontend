import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className="moviescardlist">
            <div className="moviescardlist__container">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </div>
            <button className="moviescardlist__more" onClick={props.onClick}>Ещё</button>
        </section>
    );
}

export default MoviesCardList;