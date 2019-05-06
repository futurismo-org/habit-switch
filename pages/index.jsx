import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  updateTimerAction,
  startTimerAction,
  stopTimerAction,
  resetTimerAction
} from '../store';

const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTimer = styled.span`
  color: black;
  font-size: 10vw;
`;

const StyledTimerButtonContainer = styled.div`
  margin: 10px;
  width: 30vw;
  display: flex;
  justify-content: space-around;
`;

const StyledTimerButton = styled.button`
  font-size: 30px;
`;

const Home = () => (
  <StyledCenterContainer>
    <h2>Titan Habit Tracker</h2>
    <div>
      <StyledTimer>00</StyledTimer>
      <StyledTimer>:</StyledTimer>
      <StyledTimer>00</StyledTimer>
      <StyledTimer>:</StyledTimer>
      <StyledTimer>00</StyledTimer>
    </div>
    <StyledTimerButtonContainer>
      <StyledTimerButton type="button" name="button">
        START
      </StyledTimerButton>
      <StyledTimerButton type="button" name="button">
        STOP
      </StyledTimerButton>
      <StyledTimerButton type="button" name="button">
        RESET
      </StyledTimerButton>
    </StyledTimerButtonContainer>
  </StyledCenterContainer>
);

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
function mapDispatchToProps(dispatch) {
  return {
    startTimer: () => {
      const intervalID = setInterval(() => dispatch(updateTimerAction()), 1000);
      dispatch(startTimerAction(intervalID));
    },
    stopTimer: () => dispatch(stopTimerAction()),
    resetTimer: () => dispatch(resetTimerAction())
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
)(Home);
