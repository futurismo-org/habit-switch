import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Timer from './timer';
import TimerButton from './timer-button';

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

const App = props => (
  <StyledCenterContainer>
    <h2>Titan Habit Tracker</h2>
    <Timer
      days={props.days}
      hours={props.hours}
      minutes={props.minutes}
      seconds={props.seconds}
    />
    <StyledTimerButtonContainer>
      <TimerButton text="START" handleClick={props.startTimer} />
      <TimerButton text="STOP" handleClick={props.stopTimer} />
      <TimerButton text="RESET" handleClick={props.resetTimer} />
    </StyledTimerButtonContainer>
  </StyledCenterContainer>
);

export default App;
