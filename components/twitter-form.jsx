import React from 'react';
import TextField from '@material-ui/core/TextField';
import { setTitle } from '../store';

const handleChange = name => event => {
  if (name === 'title') {
    setTitle(event.target.value);
  }
};

const TwitterForm = props => (
  <form noValidate autoComplete="off">
    <TextField
      label="タイトル"
      value={props.title}
      onChange={handleChange('title')}
    />
    <TextField
      label="内容"
      multiline
      rowsMax="4"
      value={props.content}
      margin="normal"
      variant="outlined"
      // onChange={handleChange('twitterContent')}
    />
  </form>
);

export default TwitterForm;
