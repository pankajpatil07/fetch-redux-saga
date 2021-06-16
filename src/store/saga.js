import { all } from 'redux-saga/effects';
import  user  from '../components/user/sagas/user';
export default function* rootSaga() {
  yield all(user);
}
