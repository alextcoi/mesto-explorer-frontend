import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Popup from '../Popup/Popup';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Switch, Route, useHistory } from "react-router-dom";
import Error from '../Error/Error';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [status, setStatus] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function tokenCheck() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token) {
        mainApi.getContent(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push("/movies");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  };

  useEffect(() => {
    moviesApi
      .getMovies()
      .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
          setMovies(JSON.parse(localStorage.getItem('movies') || "[]"));
      })
      .catch((err) => {
          console.log(err);
      })
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token) {
        mainApi
          .getItems(token)
          .then((res) => {
              setSavedMovies(res.filter(item => item.owner === currentUser._id));
          })
          .catch((err) => {
              console.log(err);
          })
      }
    }
  }, [currentUser, savedMovies]);

  function handleUpdateUser(item) {
    const token = localStorage.getItem("token");
    mainApi
      .patchProfile(item, token)
      .then((result) => {
        setCurrentUser(result);
        setStatus(true);
        setTimeout(() => {setStatus(false)}, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLogin(email, password) {
    mainApi.signin(email, password).then((res) => {
      if (res) {
        setLoggedIn(true);
        setCurrentUser(res.userInfo);
        localStorage.setItem("token", res.token);
        tokenCheck();
        history.push("/movies");
      } else {
        setError(true);
      }
    });
  }

  function onRegister(fullName, email, password) {
    mainApi.signup(fullName, email, password).then((res) => {
      if (res) {
        setCurrentUser(res.userInfo);
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        history.push("/movies");
      } else {
        setError(true);
      }
    })
  }

  function onSignOut() {
    localStorage.removeItem("token");
    history.push("/");
  }

  function handleUpdate(list) {
    setSavedMovies(list);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/signup">
            <Register
              onRegister={onRegister}
              error={error}
            />
          </Route>
          <Route path="/signin">
            <Login
              onLogin={onLogin}
              error={error}
            />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            items={movies}
            savedItems={savedMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            onUpdate={handleUpdate}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSignOut={onSignOut}
            onUpdateUser={handleUpdateUser}
          />
          {/* <Route>
              {loggedIn ? <Redirect to="/movies" /> : <Redirect exact to="/" />}
          </Route> */}
          <Route component={Error}/>
        </Switch>
        <Popup
          status={status}
        />
        <Footer/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
