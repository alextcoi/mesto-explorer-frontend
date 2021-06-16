import './Profile.css';

function Profile(props) {
    return (
        <section className="profile">
            <form className="profile__container" onSubmit={props.onSubmit} noValidate>
                <h2 className="profile__title">Привет, Алексей!</h2>
                <div className="profile__inputs">
                    <label className="profile__input-name">Имя</label>
                    <input className="profile__input" type="text" value="Алексей" placeholder="Имя" required/>
                </div>
                <div className="profile__inputs">
                    <label className="profile__input-name">Email</label>
                    <input className="profile__input" type="email" value="Я устал" placeholder="Email" required/>
                </div>
                <div className="profile__buttons">
                    <button onSubmit={props.onSubmit} className="profile__button profile__button_edit">Редактировать</button>
                    <button onClick={props.onSignOut} className="profile__button profile__button_signout">Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    );
}

export default Profile;