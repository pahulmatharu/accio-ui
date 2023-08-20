import { fork, call, put, takeLatest } from 'redux-saga/effects';
// import { GetUserService } from 'api/setup/setup';
import { setUser } from './slice';
import { LOGOUT } from './saga-actions';

function* signOutUser(): Generator<any, any, any> {
  // const userService = GetUserService();
  // yield call(userService.logout);
  // yield put(setUser(undefined));
}

function* userWatcher(): Generator<any, any, any> {
  yield takeLatest(LOGOUT, signOutUser);
}

function* coreSaga() {
  yield fork(userWatcher);
}

export default coreSaga;
