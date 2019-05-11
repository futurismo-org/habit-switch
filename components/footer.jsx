import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-shrink: 0;
  text-align: center;
  background-color: #f44336;

  width: 100%;
  position: absolute;
  bottom: 0;
`;

const StyledAnchor = styled.a`
  color: white;
  margin: 10px;
  text-decoration: none;
`;

const Footer = () => (
  <StyledFooter>
    <StyledAnchor href="https://twitter.com/titan_dev_1234">
      Twitter
    </StyledAnchor>
    <StyledAnchor href="https://note.mu/titan_dev">Blog</StyledAnchor>
  </StyledFooter>
);

export default Footer;
