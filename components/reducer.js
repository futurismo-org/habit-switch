import * as timerModel from './timer-model';

/**
 * Reduxのreducer タイマーの時間の状態遷移を処理する
 * @param state Reduxのstoreで管理されている状態
 * @param action アクションオブジェクト
 * @return actionに応じて変化させた新しい状態
 */
const timer = (state = timerModel.initialState(), action) => {
  switch (action.type) {
    case 'START_TIMER':
      return timerModel.start(state, action.intervalID);
    case 'STOP_TIMER':
      return timerModel.stop(state);
    case 'UPDATE_TIMER':
      return timerModel.update(state);
    case 'RESET_TIMER':
      return timerModel.reset(state);
    default:
      return state;
  }
};

export default timer;
