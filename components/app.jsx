import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Timer from './timer';

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

const StyledTimerButton = styled.button`
  font-size: 30px;
`;

const App = props => (
  <StyledCenterContainer>
    <h2>Titan Habit Tracker</h2>
    <Timer
      hours={props.hours}
      minutes={props.minutes}
      seconds={props.seconds}
    />
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

export default App;
