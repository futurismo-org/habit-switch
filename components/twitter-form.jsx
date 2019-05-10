import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const TwitterForm = props => (
  <form noValidate autoComplete="off">
    <TextField label="タイトル" value={props.title} />
    <TextField
      label="内容"
      multiline
      rowsMax="4"
      value={props.content}
      margin="normal"
      variant="outlined"
    />
  </form>
);

export default TwitterForm;
