import React from 'react';
import Config from 'react-native-config';
import {Image} from 'react-native-elements';
import styled from 'styled-components';
import {Title, Closed} from '../components/Typo';

const {BACKGROUND_SECONDARY} = Config;

type PoolItemProps = {
  id: number;
  title: string;
  photo?: string;
  closed?: string;
};

const PoolItem = ({item: {item}}: PoolItemProps) => {
  const {photo, title, closed} = item;
  return (
    <RowWrapper>
      <Row>
        <Thumbnail source={{uri: photo}} />
      </Row>
      <Column spaceEvenly>
        <Title>{title}</Title>
        <Closed>{closed}</Closed>
      </Column>
    </RowWrapper>
  );
};

export default PoolItem;

const Thumbnail = styled(Image)`
  width: 80;
  height: 80;
`;

const Row = styled.View`
  margin: 5px;
  flex-direction: row;
`;

const RowWrapper = styled(Row)`
  margin-left: 0;
  background-color: ${BACKGROUND_SECONDARY};
  width: 100%;
`;

const Column = styled.View`
  margin: 5px;
  flex-direction: column;
  justify-content: ${props =>
    props.center
      ? 'center'
      : props.spaceEvenly
      ? 'space-evenly'
      : 'flex-start'};
`;
