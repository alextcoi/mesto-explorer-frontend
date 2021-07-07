import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__info">
                    <h3 className="about-me__name">Алексей</h3>
                    <p className="about-me__prof">Фронтенд-разработчик, 28 лет</p>
                    <p className="about-me__descrip">
                        Я родился и живу в Москве, закончил факультет экономики РЭУ имени Г.В. Плеханова. 
                        Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал 
                        в компании «СИБУР». После того, как прошёл курс по веб-разработке, начал изучать проджект-менеджмент в ИТ.
                    </p>
                    <div className="about-me__contacts">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/aleksey.tsoy.125/" className="about-me__contact">Facebook</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/alextcoi" className="about-me__contact">GitHub</a>
                    </div>
                </div>
                <div className="about-me__photo" alt="Мое фото"></div>
            </div>
        </section>
    );
}

export default AboutMe;