import './Login.css';
import Form from '../Form/Form';
import { useEffect, useState } from 'react';

function Login({ onLogin, error }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const [buttonState, setButtonState] = useState(true);

    const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    function handleChange(event) {
        const { name, value } = event.target;
    
        switch (name) {
          case 'email':
            setEmail(value);
            if (validEmailRegex.test(value)) {
                setErrors({...errors, email:''});
            } else {setErrors({...errors, email: 'Почта введена некорректно'})}
            break;
          case 'password':
            setPassword(value);
            if (value.length < 8) {
                setErrors({...errors, password: 'Пароль должен быть не менее 8 символов'})
            } else {
                setErrors({...errors, password: ''})
            }
            break;
          default:
            break;
        }
    }

    useEffect(() => {
        setButtonState(
            !(errors.email.length === 0 
            && errors.password.length === 0 
            && email.length > 0 
            && password.length > 0)
        );
    }, [errors, email, password]);

    function handleSubmit(event) {
        event.preventDefault();
        onLogin(email, password);
    }

    return (
        <section className="login">
            <Form   
            title={'Рады видеть!'}
            buttonTitle={'Войти'}
            text={'Ещё не зарегистрированы? '}
            linkname={'Регистрация'}
            buttonClass={'form__button_login'}
            onSubmit={handleSubmit}
            buttonState={buttonState}
            error={error}
            >
                <p className="form__input-name">Email</p>
                <input className="form__input" type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
                {<span className="form__error">{errors.email}</span>}
                <p className="form__input-name">Пароль</p>
                <input className="form__input" type="password" name="password" value={password} onChange={handleChange} placeholder="Пароль" minLength="8" required/>
                {<span className="form__error">{errors.password}</span>}
            </Form>
        </section>
    );
}

export default Login;