import data from '../data';
import { all } from 'redux-saga/effects';

export default function* saga() {
  yield all([
    data.saga(),
  ]);
}
