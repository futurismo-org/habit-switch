import React from 'react';
import TextField from '@material-ui/core/TextField';

const TwitterForm = props => (
  <form noValidate autoComplete="off">
    <TextField
      label="タイトル"
      value={props.title}
      onChange={props.handleTitle}
    />
    <TextField
      label="内容"
      multiline
      rowsMax="4"
      value={props.content}
      margin="normal"
      variant="outlined"
      onChange={props.handleContent}
    />
  </form>
);

export default TwitterForm;
