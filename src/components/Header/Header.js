import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header () {
    const location = useLocation();
    let headerClass

    if (location.pathname === "/") { headerClass = "header_main" }
        else if (location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") {headerClass = "header_movies"}
        else {headerClass = "header_forms"}

    return (
        <header className={`header ${headerClass}`}>
            <Navigation/>
        </header>
    );
}

export default Header;