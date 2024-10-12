// Create Reducers-->(userReducer.js)

const initialState = {
    isLoggedIn: false,
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;


// Create Actions-->(userActions.js)

export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  


// Combine Reducers-->(index.js)

import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers here
});

export default rootReducer;



//   Use Redux in Functional Component-->(AuthComponent.js)


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './actions/userActions';

function AuthComponent() {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username: 'user123' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default AuthComponent;
