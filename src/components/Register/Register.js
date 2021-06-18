import './Register.css';
import Form from '../Form/Form';

function Register() {
    return (
        <section className="register">
            <Form   
            title={'Добро пожаловать!'}
            buttonTitle={'Зарегистрироваться'}
            text={'Уже зарегистрированы? '}
            linkname={'Войти'}
            buttonClass={'form__button_register'}
            >
                <p className="form__input-name">Имя</p>
                <input className="form__input" type="text" placeholder="Имя" required/>
                <span className="form__error"></span>
                <p className="form__input-name">Email</p>
                <input className="form__input" type="email" placeholder="Email" required/>
                <span className="form__error"></span>
                <p className="form__input-name">Пароль</p>
                <input className="form__input" type="password" placeholder="Пароль" required/>
                <span className="form__error"></span>
            </Form>
        </section>
    );
}

export default Register;