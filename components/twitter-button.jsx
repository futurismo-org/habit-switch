import React from 'react';
import Button from '@material-ui/core/Button';

const title = 'オナ禁チャレンジ';
const content = '';
const hashtags = 'オナ禁';
const url = 'https://titan-habit-tracker.netlify.com';

const formatTime = time => {
  if (time === undefined) {
    return '0';
  }
  return time;
};

const textBuilder = props =>
  `https://twitter.com/intent/tweet?text=${title}%20${formatTime(props.days)}日
  ${props.hours}時間
  ${props.minutes}分
  達成しました！%0a%0a${content}%0a%0a${url}&hashtags=${hashtags}`;

const clickHandler = () => {
  /* eslint-disable no-undef */
  window.open(
    encodeURI(decodeURI(this.href)),
    'tweetwindow',
    'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'
  );
  return false;
};

const TwitterButton = props => (
  <div>
    <a
      href={textBuilder(props)}
      onClick={clickHandler}
      rel="nofollow"
      className="twitter-button"
    >
      <Button variant="contained" color={props.color}>
        Twitterでシェア
      </Button>
    </a>
  </div>
);

export default TwitterButton;
