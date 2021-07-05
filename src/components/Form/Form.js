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
                <button type="submit" disabled={props.buttonState} className={`form__button ${props.buttonClass} ${props.buttonState ? 'form__button_disabled' : ''}`}>{props.buttonTitle}</button>
                <p className={`form__error ${props.error ? "form__error_visible" : "form__error_hidden"}`}>{
                    location.pathname === "/signup"
                    ? "Упс! Такой пользователь уже есть"
                    : location.pathname === "/signin"
                    ? "Неверный email или пароль"
                    : "Хм. Что-то пошло не так"
                }</p>
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