import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const toDays = time => parseInt(time / 60 / 60 / 24);
const toHours = time => parseInt(time / 60 / 60);
const toMinutes = time => parseInt((time / 60) % 60);
const toSeconds = time => time % 60;
const toText = time => `00${time}`.slice(-2);

/**
 * タイマーの状態を開始状態に変更する
 * @param state タイマーの状態
 * @param {number} intervalID setInterval()で得られたID
 * @return タイマーの開始状態
 */
export function start(state, intervalID) {
  return Object.assign({}, state, {
    started: true,
    intervalID
  });
}

/**
 * タイマーの状態を停止状態に変更する
 * @param state タイマーの状態
 * @return タイマーの停止状態
 */
export function stop(state) {
  clearInterval(state.intervalID);

  return Object.assign({}, state, {
    started: false,
    intervalID: -1
  });
}

/**
 * タイマーの時間を1秒進める
 * @param state タイマーの時間の状態
 * @return 時間を1秒進めた新しい状態
 */
export function update(state) {
  const time = state.time + 1;
  const days = toDays(time);
  const hours = toHours(time);
  const minutes = toMinutes(time);
  const seconds = toSeconds(time);

  return Object.assign({}, state, {
    days,
    hours: toText(hours),
    minutes: toText(minutes),
    seconds: toText(seconds),
    time
  });
}

/**
 * タイマーの初期状態
 */
export function initialState() {
  return {
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
    time: 0,
    started: false,
    intervalID: -1
  };
}

/**
 * タイマーの時間をリセットする
 * @return タイマーの初期状態
 */
export function reset(state) {
  return Object.assign({}, initialState(), {
    started: state.started,
    intervalID: state.intervalID
  });
}

export function startTimerAction(intervalID) {
  return { type: 'START_TIMER', intervalID };
}

export function stopTimerAction() {
  return { type: 'STOP_TIMER' };
}

export function updateTimerAction() {
  return { type: 'UPDATE_TIMER' };
}

export function resetTimerAction() {
  return { type: 'RESET_TIMER' };
}

/**
 * Reduxのreducer タイマーの時間の状態遷移を処理する
 * @param state Reduxのstoreで管理されている状態
 * @param action アクションオブジェクト
 * @return actionに応じて変化させた新しい状態
 */
export const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'START_TIMER':
      return start(state, action.intervalID);
    case 'STOP_TIMER':
      return stop(state);
    case 'UPDATE_TIMER':
      return update(state);
    case 'RESET_TIMER':
      return reset(state);
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export function initializeStore(state = initialState()) {
  return createStore(
    persistedReducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const persistor = store => persistStore(store);
