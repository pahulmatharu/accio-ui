import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { injectDispatch } from 'api/setup/base-client';
import coreReducer, {
  initialState as initialCoreState,
} from './core/slice';
import rootSaga from './rootSaga';
import { ICoreState } from 'models/store/state';

const initalStates = {
};

const getStore = (coreState: ICoreState = initialCoreState) => {
  let sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = configureStore({
    reducer: {
      core: coreReducer,
    },
    preloadedState: { ...initalStates, core: coreState },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });

  sagaMiddleware.run(rootSaga);
  injectDispatch(store.dispatch);
  return store;
};

export default getStore;
