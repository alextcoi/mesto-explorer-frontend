import './Navigation.css';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import { Link, useLocation } from 'react-router-dom';
import profile from '../../images/account.png';

function Navigation () {
    let navigationMain;
    let navigationMovies;
    const location = useLocation();

    if (location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") { 
        navigationMain = "navigation__hidden";
        navigationMovies = "navigation__visible";
    } else { 
        navigationMovies = "navigation__hidden";
        navigationMain = "navigation__visible";
    }

    return (
        <nav className="navigation">
            <Logo/>
            <div className={`navigation__container ${navigationMain}`}>
                <Link to="/signup" className="navigation__main-link navigation__main-link_register">Регистрация</Link>
                <Link to="/signin" className="navigation__main-link navigation__main-link_login">Войти</Link>
            </div>
            <div className={`navigation__container ${navigationMovies}`}>
                <div className="navigation__movies-links">
                    <Link to="/movies" className="navigation__movies-link navigation__movies-link_movies">Фильмы</Link>
                    <Link to="/saved-movies" className="navigation__movies-link navigation__movies-link_saved-movies">Сохранённые фильмы</Link>
                </div>
                <Link to="/profile" className="navigation__movies-profile">
                    Аккаунт
                    <img className="navigation__movies-profile-pic" src={profile} alt="Картинка аккаунта"/>
                </Link>
            </div>
            <Hamburger/>
        </nav>
    );
}

export default Navigation;