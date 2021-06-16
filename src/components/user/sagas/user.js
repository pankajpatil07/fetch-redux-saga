import { takeLatest, fork, call, put } from 'redux-saga/effects';
import * as actionTypes from '../../../components/user/actions/user';
import { getUser } from '../services/user.service';
import get from 'lodash/get';
import isNull from 'lodash/isNull';

const _ = { get, isNull };

function* workerGetUser(action) {
  try {
    const response = yield call(getUser, action.payload);
    const res_body = _.get(response, 'data', {});
    // console.log('res_body', res_body);
    const res_status = true;

    if (res_status) {
      // console.log('success');
      yield put({
        type: actionTypes.USER_SUCCESS,
        payload: _.get(response, 'data', [])
      });
    } else {
      // console.log('failed');
      yield put({
        type: actionTypes.USER_FAIL,
        payload: res_body
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.USER_FAIL });
  }
}

function* watchGetUser() {
    yield takeLatest(actionTypes.USER_REQUEST, workerGetUser);
}

export default [
  fork(watchGetUser),
];
