import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer
} from './reducers/userReducers';

import {
  estudianteListReducer,
  estudianteDetailsReducer,
  estudianteCreateReducer,
  estudianteUpdateReducer,
  estudianteDeleteReducer
} from './reducers/estudianteReducers';

import { llaveroCreateReducer } from './reducers/llaveroReducers';

const reducer = combineReducers({
  estudianteList: estudianteListReducer,
  estudianteCreate: estudianteCreateReducer,
  estudianteDetails: estudianteDetailsReducer,
  estudianteUpdate: estudianteUpdateReducer,
  estudianteDelete: estudianteDeleteReducer,

  llaveroCreate: llaveroCreateReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
