import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledTimerButton = styled(Button)`
  font-size: 30px;
`;

const TimerButton = props => (
  <StyledTimerButton
    className="timer-button"
    variant="contained"
    color={props.color}
    onClick={props.handleClick}
  >
    {props.text}
  </StyledTimerButton>
);

export default TimerButton;
