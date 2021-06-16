import './Login.css';
import Form from '../Form/Form';

function Register() {
    return (
        <section className="login">
            <Form   
            title={'Рады видеть!'}
            buttonTitle={'Войти'}
            text={'Ещё не зарегистрированы? '}
            linkname={'Регистрация'}
            buttonClass={'form__button_login'}
            >
                <p className="form__input-name">Email</p>
                <input className="form__input" type="email" placeholder="Email" required/>
                <span className="form__error"></span>
                <p className="form__input-name">Пароль</p>
                <input className="form__input" type="password" placeholder="Пароль" minLength="8" required/>
                <span className="form__error"></span>
            </Form>
        </section>
    );
}

export default Register;