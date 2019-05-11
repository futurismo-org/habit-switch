import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Timer from './timer';
import TimerButton from './timer-button';
import TwitterButton from './twitter-button';
import TwitterForm from './twitter-form';
import { updateTitle } from '../store';

const StyledCenterContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTimerButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
`;

const StyledTwitterFormContainer = styled.div`
  margin: 10px;
  text-align: center;
  justify-content: space-around;
`;

const HeadComponent = () => (
  <Head>
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
  </Head>
);

const formatDate = datetime => {
  if (datetime !== null) {
    return moment(datetime).format('YYYY年MM月DD日 HH:mm');
  }
  return 'なし';
};

const App = props => {
  const confirm = () => {
    /* eslint-disable no-undef */
    if (window.confirm('本当にリセットしますか？')) {
      props.resetTimer();
    }
  };

  return (
    <div>
      <HeadComponent />
      <AppBar>
        <Typography variant="h5" color="inherit">
          Titan Habit Tracker
        </Typography>
      </AppBar>
      <StyledCenterContainer>
        <Timer
          days={props.days}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
        />
        <h3>開始日: {formatDate(props.startTime)}</h3>
        <StyledTimerButtonContainer>
          <TimerButton
            text="スタート"
            color="primary"
            handleClick={props.startTimer}
          />
          <TimerButton
            text="リセット"
            color="secondary"
            handleClick={confirm}
          />
        </StyledTimerButtonContainer>
        <StyledTwitterFormContainer>
          <TwitterForm
            title={props.title}
            content={props.content}
            handleTitle={props.updateTitle}
            handleContent={props.updateContent}
          />
          <TwitterButton
            days={props.days}
            hours={props.hours}
            minutes={props.minutes}
            title={props.title}
            content={props.content}
          />
        </StyledTwitterFormContainer>
      </StyledCenterContainer>
    </div>
  );
};

export default App;
