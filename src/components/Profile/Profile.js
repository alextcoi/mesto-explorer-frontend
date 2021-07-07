import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';

function Profile({ onUpdateUser, onSignOut }) {
    const userData = useContext(CurrentUserContext);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        fullName: "",
        email: ""
    });
    const [buttonState, setButtonState] = useState(true);

    const validEmailRegex = RegExp(/\w+@\w+\.\w+/);
    const validNameRegex = RegExp(/[a-zа-я\sё-]/gi);

    useEffect(() => {
        setFullName(userData.name || "");
        setEmail(userData.email || "");
      }, [userData]);

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
          default:
            break;
        }
    }

    useEffect(() => {
        setButtonState(
            !(errors.email.length === 0 
            && errors.fullName.length === 0 
            && fullName.length > 0 
            && email.length > 0)
        );
    }, [errors, fullName, email, userData]);

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateUser({
            name: fullName,
            email: email,
        });
    }

    return (
        <section className="profile">
            <form className="profile__container" onSubmit={handleSubmit} noValidate>
                <h2 className="profile__title">{`Привет, ${fullName}!`}</h2>
                <div className="profile__inputs">
                    <label className="profile__input-name">Имя</label>
                    <input className="profile__input" type="text" name="fullName" value={fullName} onChange={handleChange} placeholder="Имя" required/>                    
                </div>
                {<span className="profile__error">{errors.fullName}</span>}
                <div className="profile__inputs">
                    <label className="profile__input-name">Email</label>
                    <input className="profile__input" type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
                </div>
                {<span className="profile__error">{errors.email}</span>}
                <div className="profile__buttons">
                    <button type="submit" disabled={buttonState} className={`profile__button profile__button_edit ${buttonState ? 'profile__button_disabled' : ''}`}>Редактировать</button>
                    <button type="button" onClick={onSignOut} className="profile__button profile__button_signout">Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    );
}

export default Profile;