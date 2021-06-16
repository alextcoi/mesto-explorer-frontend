import './Error.css';
import { useHistory } from 'react-router-dom';

function Error() {
    const history = useHistory();

    return (
        <section className="error">
            <p className="error__code">404</p>
            <p className="error__name">Страница не найдена</p>
            <button onClick={() => history.goBack()} className="error__button">Назад</button>
        </section>
    );
}

export default Error;