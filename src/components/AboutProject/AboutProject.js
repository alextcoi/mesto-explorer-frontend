import './AboutProject.css';

function AboutProject() {
    return (
        <div className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <ul className="about-project__steps">
                <li className="about-project__step">
                    <h3 className="about-project__step-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__step-info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about-project__step">
                    <h3 className="about-project__step-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__step-info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className="about-project__graph">
                <p className="about-project__graph-first">1 неделя</p>
                <p className="about-project__graph-second">4 недели</p>
                <p className="about-project__graph-descrip about-project__graph-descrip_first">Back-end</p>
                <p className="about-project__graph-descrip about-project__graph-descrip_second">Front-end</p>
            </div>
        </div>
    );
}

export default AboutProject;