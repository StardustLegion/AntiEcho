// tests in progress
import { expect } from 'chai';
import React from 'react';
import configureStore from 'redux-mock-store';
import * as actions from '../client/src/actions/actions';
import thunk from 'redux-thunk';

describe('Redux store actions - synchronous', () => {
  
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it('should dispatch searchArticles action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(actions.searchArticles());
    const storeActions = store.getActions();
    const expectedType = 'SEARCH_ARTICLES';
    expect(storeActions[0].type).to.equal(expectedType);
  });

  it('should dispatch handleSearch action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(actions.handleSearch());
    const storeActions = store.getActions();
    const expectedType = 'HANDLE_SEARCH';
    expect(storeActions[0].type).to.equal(expectedType);
  });

  it('should dispatch sliderChange action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(actions.sliderChange());
    const storeActions = store.getActions();
    const expectedType = 'SLIDER_CHANGE';
    expect(storeActions[0].type).to.equal(expectedType);
  });

  it('should dispatch filterArticles action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(actions.filterArticles());
    const storeActions = store.getActions();
    const expectedType = 'FILTER_ARTICLES';
    expect(storeActions[0].type).to.equal(expectedType);
  });

  it('should dispatch fetchPosts action', () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(actions.fetchPosts());
    const storeActions = store.getActions();
    const expectedType = 'FETCH_POSTS';
    expect(storeActions[0].type).to.equal(expectedType);
  });
});

describe('Redux store actions - asynchronous', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should dispatch searchArticles after async onSubmit request', () => {
    const initialState = { steering: { textValue: 'supreme' } };
    const store = mockStore(initialState);
    return store.dispatch(actions.onSubmit())
      .then(() => {
        const storeActions = store.getActions();
        expect(storeActions[0].type).to.equal('FETCH_POSTS');
        expect(storeActions[1].type).to.equal('SEARCH_ARTICLES');
      });
  });
  
  it('should dispatch searchArticles after async onLoad request', () => {
    const initialState = {};
    const store = mockStore(initialState);
    return store.dispatch(actions.onLoad())
      .then(() => {
        const storeActions = store.getActions();
        expect(storeActions[0].type).to.equal('FETCH_POSTS');
        expect(storeActions[1].type).to.equal('SEARCH_ARTICLES');
      });
  });
});
