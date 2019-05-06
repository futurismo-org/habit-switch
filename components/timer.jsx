import React from 'react';
import styled from 'styled-components';

const StyledTimer = styled.span`
  color: black;
  font-size: 10vw;
`;

const Timer = props => (
  <div>
    <StyledTimer>{props.hours}</StyledTimer>
    <StyledTimer>:</StyledTimer>
    <StyledTimer>{props.minutes}</StyledTimer>
    <StyledTimer>:</StyledTimer>
    <StyledTimer>{props.seconds}</StyledTimer>
  </div>
);

export default Timer;
