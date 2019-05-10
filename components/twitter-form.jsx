import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const TwitterForm = props => (
  <form noValidate autoComplete="off">
    <TextField label="タイトル" value="継続チャレンジ" />
    <TextField
      label="内容"
      multiline
      rowsMax="4"
      value=""
      margin="normal"
      variant="outlined"
    />
  </form>
);

export default TwitterForm;
