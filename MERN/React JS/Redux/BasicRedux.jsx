// 1. Setup Redux:

// First, make sure you have Redux installed in your project.You can install it using npm or yarn:
// command to install redux in react

// --->>>>>>npm install redux


// 2. Create Reducers:

// Reducers are functions that specify how the application's state should change in response to actions. You can create a reducer function to manage a specific piece of your application state. Here's an example:
// reducers/counterReducer.js

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

export default counterReducer;


// 3. Create Actions:

// Actions are objects that describe what happened in your application.You can create action creators to generate these action objects:
// actions/counterActions.js


export const increment = () => ({
    type: 'INCREMENT',
});

export const decrement = () => ({
    type: 'DECREMENT',
});


// 4. Combine Reducers:

// If your application has multiple reducers, you can combine them using combineReducers from Redux.Create a root reducer that combines all the reducers:
// reducers/index.js

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;



// 5. Create the Store:

// In your React application, create the Redux store and pass it to your component.This is typically done in your application's entry point (e.g., index.js):
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



// 6. Use Redux in Your Functional Component:

// Now, you can use Redux in your functional component.To access the Redux state and dispatch actions, you can use the useSelector and useDispatch hooks provided by the react - redux library.
// App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default App;


// In this example, we're using useSelector to access the counter state from the Redux store and useDispatch to dispatch actions to modify the state.

// 7. Display the Component:

// Make sure to render your App component in your application to see the Redux functionality in action.

// With these steps, you've set up Redux in your React functional component. It allows you to manage and modify the application state in a predictable and maintainable way.

// Certainly, let's organize the steps according to the workflow when using Redux in a React functional component:

