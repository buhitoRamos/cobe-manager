import React from 'react'
import Login from "./pages/login/Login";
import MainPage from './pages/mainPage/MainPage';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './utils/reducers'; 


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const App=() => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
