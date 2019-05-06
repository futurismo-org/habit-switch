import { connect } from 'react-redux';

import { App } from './components/app.js';
import * as action from './action';

/**
 * reduxで管理しているstateをreact側に渡す
 * @param state reduxのstoreで管理されている状態
 * @return react側で使う状態 this.prorpsで参照
 */
function mapStateToProps(state) {
  return state;
}

/**
 * reactで受け取るユーザーアクションとreduxのアクションを連携させる
 * @param dispatch reduxのreducerにアクションを渡す関数
 */
function mapDispatchToProps(dispatch, props) {
  return {
    startTimer: () => {
      const intervalID = setInterval(
        () => dispatch(action.updateTimerAction()),
        1000
      );
      dispatch(action.startTimerAction(intervalID));
    },
    stopTimer: () => dispatch(action.stopTimerAction()),
    resetTimer: () => dispatch(action.resetTimerAction())
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, dispatchProps, ownProps, {
    // タイマーが止まっていたら、カウントアップを開始する
    startTimer: () => {
      if (!stateProps.started) dispatchProps.startTimer();
    }
  });
}

// 上記で定義した関数を使って、ReduxとReactのコンポーネントを繋げる
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(App);
