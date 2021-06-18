import './Promo.css';
import promo__pic from '../../images/drawing.png';

function Promo () {

    return (
        <section className="promo">
            <h1 className="promo__name">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__pic" src={promo__pic} alt="Фоновая картинка"/>
        </section>
    );
}

export default Promo;