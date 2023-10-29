// rootReducer.js (o donde tengas definido tu rootReducer)

import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Importa el nuevo reducer

const rootReducer = combineReducers({
  user: userReducer, // Agrega el nuevo reducer al rootReducer
  // Otros reducers si los tienes
});

export default rootReducer;
