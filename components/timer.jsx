import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

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
  text-align: center;
  margin-top: 10px;
`;

const StyledTimer = styled.span`
  @media screen and (min-width: 768px) {
    font-size: 5vw;
  }
  font-size: 10vw;
`;

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

const Timer = props => {
  const { classes } = props;

  return (
    <div>
      <Card
        id="generate-image"
        classes={{
          root: classes.root
        }}
      >
        <CardContent>
          <div>
            <StyledDays>{props.days}</StyledDays>
            <StyledDaysText>days</StyledDaysText>
          </div>
          <StyledDaysText>達成しました！</StyledDaysText>
        </CardContent>
      </Card>
      <StyledTimerWrapper>
        <StyledTimer>{props.hours}</StyledTimer>
        <StyledTimer>:</StyledTimer>
        <StyledTimer>{props.minutes}</StyledTimer>
        <StyledTimer>:</StyledTimer>
        <StyledTimer>{props.seconds}</StyledTimer>
      </StyledTimerWrapper>
    </div>
  );
};

export default withStyles(styles)(Timer);
