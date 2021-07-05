/* eslint-disable no-unused-expressions */
import './Register.css';
import Form from '../Form/Form';
import { useEffect, useState } from 'react';

function Register({ onRegister, error }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [buttonState, setButtonState] = useState(true);

    const validEmailRegex = RegExp(/\w+@\w+\.\w+/);
    const validNameRegex = RegExp(/[a-zа-я\sё-]/gi);

    function handleChange(event) {
        const { name, value } = event.target;
    
        switch (name) {
          case 'fullName':
            setFullName(value);
            if (value.length > 4 && validNameRegex.test(value)) {
                setErrors({...errors, fullName:''});
            } else {
                setErrors({...errors, fullName:'Имя должно быть не менее 5 символов'});
            }
            break;
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
            && errors.fullName.length === 0 
            && errors.password.length === 0 
            && fullName.length > 0 
            && email.length > 0 
            && password.length > 0)
        );
    }, [errors, fullName, email, password]);

    function handleSubmit(event) {
        event.preventDefault();
        onRegister(fullName, email, password);
    }

    return (
        <section className="register">
            <Form   
            title={'Добро пожаловать!'}
            buttonTitle={'Зарегистрироваться'}
            text={'Уже зарегистрированы? '}
            linkname={'Войти'}
            buttonClass={'form__button_register'}
            onSubmit={handleSubmit}
            buttonState={buttonState}
            error={error}
            >
                <p className="form__input-name">Имя</p>
                <input className="form__input" type="text" name="fullName" placeholder="Имя" value={fullName} onChange={handleChange} required/>
                {<span className="form__error">{errors.fullName}</span>}
                <p className="form__input-name">Email</p>
                <input className="form__input" type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required/>
                {<span className="form__error">{errors.email}</span>}
                <p className="form__input-name">Пароль</p>
                <input className="form__input" type="password" name="password" placeholder="Пароль" value={password} onChange={handleChange} required/>
                {<span className="form__error">{errors.password}</span>}
            </Form>
        </section>
    );
}

export default Register;