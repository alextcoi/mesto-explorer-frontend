class MainApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    signup(fullName, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": fullName,
                "email": email,
                "password": password
            })
        })
        .then(res => this._checkResponse(res))
        .catch((err) => console.log(err));
    };

    signin(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then(res => this._checkResponse(res))
        .catch((err) => console.log(err));
    }

    signout() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
        })
        .catch((err) => console.log(err));
    }

    getItems(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(this._checkResponse)
        .catch((err) => console.log(err));
    }

    patchProfile(item, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: item.name,
                email: item.email
            }),
            })
            .then(this._checkResponse)
            .catch((err) => console.log(err));
    }

    postMovie(item, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify({
                country: item.country,
                director: item.director,
                duration: item.duration,
                year: item.year,
                description: item.description,
                image: item.image,
                trailer: item.trailerLink,
                nameRU: item.nameRU,
                nameEN: item.nameEN,
                movieId: item.id,
            }),
            })
            .then(this._checkResponse)
            .catch((err) => console.log(err));
    }

    deleteMovie(id, token) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(this._checkResponse)
        .catch((err) => console.log(err));
    }

    getContent(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        })
        .then(res => this._checkResponse(res))
        .catch((err) => console.log(err));
    }
}

const mainApi = new MainApi('http://localhost:3000');

export default mainApi;

// https://api.tcoi.nomoredomains.icu
// http://localhost:3001