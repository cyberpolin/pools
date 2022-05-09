import styled from 'styled-components';

import Config from 'react-native-config';

const {PRIMARY_GRAY} = Config;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const Label = styled.Text`
  font-size: 18px;
`;

const NoItems = styled(Label)`
  font-size: 28px;
  color: ${PRIMARY_GRAY}
  padding: 40px 60px
`;

const Closed = styled(Label)`
  font-size: 14px
  color: ${PRIMARY_GRAY}
`;

export {Title, Label, NoItems, Closed};
