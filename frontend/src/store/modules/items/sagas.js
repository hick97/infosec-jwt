import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { getAllItemsSuccess } from './actions';

import { signOut } from '../auth/actions';

export function* getAllItems() {
  try {
    const response = yield call(api.get, '/dashboard');

    yield put(getAllItemsSuccess(response.data));
  } catch (err) {
    toast.error('Access denied');
    yield put(signOut());
  }
}

export default all([takeLatest('@items/GET_ALL_ITEMS_REQUEST', getAllItems)]);
