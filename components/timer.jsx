import React from 'react';
import styled from 'styled-components';

const StyledDays = styled.span`
  font-size: 25vw;
`;

const StyledDaysText = styled.span`
  font-size: 10vw;
`;

const StyledTimer = styled.span`
  font-size: 10vw;
`;

const Timer = props => (
  <div>
    <StyledDays>{props.days}</StyledDays>
    <StyledDaysText>days</StyledDaysText>
    <div>
      <StyledTimer>{props.hours}</StyledTimer>
      <StyledTimer>:</StyledTimer>
      <StyledTimer>{props.minutes}</StyledTimer>
      <StyledTimer>:</StyledTimer>
      <StyledTimer>{props.seconds}</StyledTimer>
    </div>
  </div>
);

export default Timer;
