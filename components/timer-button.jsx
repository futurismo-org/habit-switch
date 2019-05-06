import React from 'react';
import styled from 'styled-components';

const StyledTimerButton = styled.button`
  font-size: 30px;
`;

const TimerButton = props => (
  <StyledTimerButton
    className="timer-button"
    type="button"
    name="button"
    onClick={props.handleClick}
  >
    {props.text}
  </StyledTimerButton>
);

export default TimerButton;
