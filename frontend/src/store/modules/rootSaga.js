import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import items from './items/sagas';

export default function* rootSaga() {
  return yield all([auth, items]);
}
