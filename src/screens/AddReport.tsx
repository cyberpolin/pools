import React from 'react';
import {Button} from 'react-native-elements';
import styled from 'styled-components';

const PoolList: React.RF = () => (
  <Wrapper>
    <Button title="Solid" type="solid" icon="home" />
  </Wrapper>
);

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
export default PoolList;
