import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import messagesReducer from './reducers/messages_reducer';

const projectContainer = document.getElementById('project_app');
const project = JSON.parse(projectContainer.dataset.project).map(p => p.name);

const initialState = {
  checklist: [],
  stages: stages // TODO: get that from Rails DB.
  project: project
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/projects/:id/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  projectContainer
);
