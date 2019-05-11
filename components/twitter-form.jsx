import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const TwitterForm = props => (
  <StyledForm noValidate autoComplete="off">
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
  </StyledForm>
);

export default TwitterForm;
