import { put, takeLatest, all } from 'redux-saga/effects';
import { BASE_URL } from '../Utils/Constants';
import {FETCH_PRODUCTS,LOAD_PRODUCTS} from './Action/ProductAction';

function* fetchProducts() {
  const json = yield getProducts();  
  yield put({ type: LOAD_PRODUCTS, payload: json});
}

async function getProducts(){
      let response = await fetch(BASE_URL+"/products");
      return await response.json();
}

function* adActionWatcher() {
     yield takeLatest(FETCH_PRODUCTS, fetchProducts)
}

export default function* sagaConfig() {
   yield all([
      adActionWatcher(),
   ]);
}
