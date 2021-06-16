import './Portfolio.css';
import arrow from '../../images/arrow.png';

function Portfolio () {

    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__element">
                    <a target="_blank" rel="noreferrer" href="https://alextcoi.github.io/how-to-learn/" className="portfolio__element-name">Статичный сайт</a>
                    <img className="portfolio__element-arrow" src={arrow} alt="Стрелка"/>
                </li>
                <li className="portfolio__element">
                    <a target="_blank" rel="noreferrer" href="https://alextcoi.github.io/russian-travel/" className="portfolio__element-name">Адаптивный сайт</a>
                    <img className="portfolio__element-arrow" src={arrow} alt="Стрелка"/>
                </li>
                <li className="portfolio__element">
                    <a target="_blank" rel="noreferrer" href="https://alextcoi.github.io/russian-travel/" className="portfolio__element-name">Одностраничное приложение</a>
                    <img className="portfolio__element-arrow" src={arrow} alt="Стрелка"/>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;