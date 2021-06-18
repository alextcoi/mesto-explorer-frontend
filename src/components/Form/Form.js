import Logo from '../Logo/Logo';
import './Form.css';
import { Link, useLocation } from 'react-router-dom';

function Form (props) {
    const location = useLocation();

    return (
        <section className="form">
            <form className="form__container" onSubmit={props.onSubmit} noValidate>
                <Logo/>
                <h2 className="form__title">{props.title}</h2>
                {props.children}
                <button type="submit" className={`form__button ${props.buttonClass}`}>{props.buttonTitle}</button>
                <div className="form__text">
                    {props.text}
                    <Link to={
                        location.pathname === "/signup"
                        ? "/signin"
                        : location.pathname === "/signin"
                        ? "/signup"
                        : "/signin"
                    } className="form__text-link">{props.linkname}</Link>
                </div>
            </form>
        </section>
    );
}

export default Form;