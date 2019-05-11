import React from 'react';
import Button from '@material-ui/core/Button';

const url = 'https://titan-habit-tracker.netlify.com';

const formatTime = time => {
  if (time === undefined) {
    return '0';
  }
  return time;
};

const formatText = text => {
  if (text === undefined) {
    return '';
  }
  return text;
};

const length = props =>
  `${formatTime(props.days)}日${props.hours}時間${props.minutes}分`;

const textBuilder = props =>
  `https://twitter.com/intent/tweet?text=${formatText(props.title)}%0a${length(
    props
  )}達成しました！%0a%0a${formatText(props.content)}%0a%0a${url}`;

const TwitterButton = props => (
  <div>
    <a href={textBuilder(props)} rel="noopener noreferrer" target="_blank">
      <Button
        variant="contained"
        color={props.color}
        onClick={props.handleClick}
      >
        Twitterでシェア
      </Button>
    </a>
  </div>
);

export default TwitterButton;
