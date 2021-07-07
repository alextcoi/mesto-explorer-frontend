import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer () {
    const location = useLocation();
    let footerClass

    if (location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies") { footerClass = "footer_visible" }
        else { footerClass = "footer_hidden" }


    return (
        <footer className={`footer ${footerClass}`}>
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__date">&#169; 2020</p>
                <ul className="footer__list">
                    <a target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru" className="footer__element">Яндекс.Практикум</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/alextcoi" className="footer__element">GitHub</a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/aleksey.tsoy.125/" className="footer__element">Facebook</a>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;