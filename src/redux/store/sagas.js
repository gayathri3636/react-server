import { takeEvery, call, put, select, take, fork, all, takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/types';
import {GetDataFromServer} from '../services/index';

function* fetchLoginUser(action) {
    try {
      const baseUrl = "http://localhost:8000/getUser"
      console.log("Action->" + JSON.stringify(action));
      const reqMethod = "GET";
      const response = yield call(GetDataFromServer, baseUrl, reqMethod, '');
  
      const result = yield response.json();
      if (result.error) {
        yield put({ type: Types.LOGIN_USER_ERROR, error: result.error });
      } else {
        yield put({ type: Types.LOGIN_USER_SUCCESS, result });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function* fetchRegisterUser(action) {
    try {
      const baseUrl = "http://localhost:8000/adduser";
      console.log("Submit Action->" + JSON.stringify(action));
      let formBody = action.payload;
      const reqMethod = ""
      const response = yield call(
        GetDataFromServer,
        baseUrl,
        reqMethod,
        formBody
      );
      const result = yield response.json();
      if (result.error) {
        yield put({
          type: Types.REGISTER_USER_ERROR,
          error: result.error
        });
      } else {
        yield put({ type: Types.REGISTER_USER_SUCCESS, result });
      }
    } catch (error) {
      console.log(error);
    }
  }

export default function* rootSaga(params) {
  yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
  yield takeLatest(Types.REGISTER_USER, fetchRegisterUser);

  console.log("from ROOT SAGA");
}