import React from 'react';
import styled from 'styled-components';

import { confirmAlert } from 'react-confirm-alert';
import Timer from './timer';
import TimerButton from './timer-button';

import 'react-confirm-alert/src/react-confirm-alert.css';

const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTimerButtonContainer = styled.div`
  margin: 10px;
  width: 30vw;
  display: flex;
  justify-content: space-around;
`;

const App = props => {
  const confirm = () => {
    confirmAlert({
      title: '確認',
      message: '本当にリセットしますか？',
      buttons: [
        {
          label: 'Yes',
          onClick: () => props.resetTimer()
        },
        {
          label: 'No'
        }
      ]
    });
  };

  return (
    <StyledCenterContainer>
      <h2>Titan Habit Tracker</h2>
      <Timer
        days={props.days}
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />
      <StyledTimerButtonContainer>
        <TimerButton text="スタート" handleClick={props.startTimer} />
        <TimerButton text="リセット" handleClick={confirm} />
      </StyledTimerButtonContainer>
    </StyledCenterContainer>
  );
};

export default App;
