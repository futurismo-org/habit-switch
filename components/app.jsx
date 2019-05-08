import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Head from 'next/head';
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
  display: flex;
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
      <StyledCenterContainer>
        <h2>Titan Habit Tracker</h2>
        <Timer
          days={props.days}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
        />
        <h3>開始日: {formatDate(props.startTime)}</h3>
        <StyledTimerButtonContainer>
          <TimerButton text="スタート" handleClick={props.startTimer} />
          <TimerButton text="リセット" handleClick={confirm} />
        </StyledTimerButtonContainer>
      </StyledCenterContainer>
    </div>
  );
};

export default App;
