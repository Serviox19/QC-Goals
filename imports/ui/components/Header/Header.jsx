import React, { Component } from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import { StyledHeader, Img } from './style.js';

export const Header = (props) => (
  <StyledHeader>
    <Col span={14} offset={5}>
      <Img src="https://cdn.quantifiedcommerce.com/images/logo-qc.png" />
    </Col>
  </StyledHeader>
)
