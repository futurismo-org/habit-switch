import React from 'react';
import styled from 'styled-components';

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

export default Home;
