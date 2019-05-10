import React from 'react';
import TextField from '@material-ui/core/TextField';
import store from '../store';

const handleTitleChange = event => {
  store.setTwitterTitle(event.target.value);
};

const TwitterForm = props => (
  <form noValidate autoComplete="off">
    <TextField
      label="タイトル"
      value={props.title}
      onChange={handleTitleChange()}
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
