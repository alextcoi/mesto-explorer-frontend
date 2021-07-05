class MoviesApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            );
    }

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
        })
        .then(this._checkResponse)
    }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;
