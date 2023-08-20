import { all, spawn, call } from 'redux-saga/effects';
import coreSaga from './core/saga';

function* rootSaga() {
  const sagas = [coreSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
          }
        }
      }),
    ),
  );
}

export default rootSaga;
