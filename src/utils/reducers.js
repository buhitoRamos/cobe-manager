// reducers.js

const initialState = {
    userData: null, // Puedes inicializarlo con null o un valor inicial
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          userData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  