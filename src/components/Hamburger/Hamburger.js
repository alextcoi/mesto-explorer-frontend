import './Hamburger.css';
import { Link, useLocation } from 'react-router-dom';
import profile from '../../images/account.png';

function Hamburger () {
    let hamburger;
    const location = useLocation();

    if (location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") { 
        hamburger = "hamburger_visible";
    } else { 
        hamburger = "hamburger_hidden";
    }

    return (
        <section className={`hamburger ${hamburger}`}>
            <input type="checkbox"/>
            <div className="hamburger-cover"/>
            <span></span>
            <span></span>
            <span></span>
            <div className="hamburger-menu">
                <Link to="/" className="hamburger-menu-item">Главная</Link>
                <Link to="/movies" className="hamburger-menu-item">Фильмы</Link>
                <Link to="/saved-movies" className="hamburger-menu-item">Сохранённые фильмы</Link>
                <Link to="/profile" className="hamburger-menu-item">
                    Аккаунт
                    <img className="profile-pic" src={profile} alt="Картинка аккаунта"/>
                </Link>
            </div>
        </section>
    );
}

export default Hamburger;