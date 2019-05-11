import React from 'react';
import styled from 'styled-components';

const StyledDays = styled.span`
  @media screen and (min-width: 768px) {
    font-size: 12vw;
  }
  font-size: 25vw;
`;

const StyledDaysText = styled.span`
  @media screen and (min-width: 768px) {
    font-size: 6vw;
  }
  font-size: 10vw;
`;

const StyledTimerWrapper = styled.div`
  margin-top: 0%;
`;

const StyledTimer = styled.span`
  @media screen and (min-width: 768px) {
    font-size: 5vw;
  }
  font-size: 10vw;
`;

const Timer = props => (
  <div>
    <StyledDays>{props.days}</StyledDays>
    <StyledDaysText>days</StyledDaysText>
    <StyledTimerWrapper>
      <StyledTimer>{props.hours}</StyledTimer>
      <StyledTimer>:</StyledTimer>
      <StyledTimer>{props.minutes}</StyledTimer>
      <StyledTimer>:</StyledTimer>
      <StyledTimer>{props.seconds}</StyledTimer>
    </StyledTimerWrapper>
  </div>
);

export default Timer;
