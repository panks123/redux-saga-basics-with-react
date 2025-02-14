# Redux Saga

Redux-Saga is a middleware for handling side effects (such as API calls, asynchronous operations, etc.) in a Redux application. It is based on **ES6 generators** and makes it easy to manage complex asynchronous flows in a more readable and testable way.

Instead of using **thunks** (like redux-thunk), where you directly dispatch async actions, Redux-Saga allows you to handle side effects using generators `(function*)`, making the flow more manageable.

# How Redux Saga Works with Redux
- **Actions**: UI dispatches an action (e.g., FETCH_USER_REQUEST).
- **Saga Listens**: A Saga middleware listens for the action.
- **Saga Handles Async Task**: It makes an API call or performs an async task.
- **Dispatch New Action**: The Saga dispatches a new action based on the async result (e.g., FETCH_USER_SUCCESS or FETCH_USER_FAILURE).
- **Reducer Updates State**: The reducer updates the store accordingly.

# Terminologies in Redux-Saga

- **Worker Saga**: A generator function that performs side effects (like API calls).
- **Watcher Saga**: Watches for dispatched actions and triggers worker sagas.
- **Effect Creators**: Functions provided by Redux-Saga to handle async operations
    - `takeEvery()`: Runs a saga for every dispatched action.
    - `takeLatest()`: Cancels the previous saga if the same action is dispatched again.
    - `call()`: Calls an API function.
    - `put()`: Dispatches an action.
    - `all()`: Runs multiple sagas in parallel.

For Using Redux Saga install the **redux-saga** npm package by `npm install redux-saga`
