import './Logo.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Logo () {

    return (
        <Link to="/" className="logo__container">
            <img className="logo" src={logo} alt="Логотип"/>
        </Link>
    );
}

export default Logo;