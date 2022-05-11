import React from 'react';
import Config from 'react-native-config';
import {Button, Icon} from 'react-native-elements';
import styled from 'styled-components';

import {NoItems} from '../components/Typo';
import PoolItem from '../components/PoolItem';
import LinearGradient from 'react-native-linear-gradient';

const {BACKGROUND_PRIMARY, BACKGROUND_SECONDARY} = Config;
const pools = [
  {
    id: '1',
    title: 'Pool 1',
    photo: 'https://via.placeholder.com/300.png/09f/fff',
    closed: 'Closed until Nov 23 - 2:00pm',
  },
  {
    id: '2',
    title: 'Pool 2',
    photo: 'https://via.placeholder.com/300.png',
    closed: 'Closed until Nov 23 - 5:00pm',
  },
  {
    id: '3',
    title: 'Pool 3',
    photo: 'https://via.placeholder.com/300.png/09f/fff',
    closed: 'Closed until Nov 23 - 2:00pm',
  },
  {
    id: '4',
    title: 'Main Pool',
    photo: 'https://via.placeholder.com/300.png/09f/fff',
  },
];

const showList = pools.length > 0;
const PoolList: React.RF = ({navigation}) => (
  <Wrapper>
    {showList ? (
      <FlatList
        data={pools}
        renderItem={item => <PoolItem item={item} />}
        keyExtractor={({id}) => id}
      />
    ) : (
      <NoItems>There are no pools yet, please add one...</NoItems>
    )}
    <Button
      title=""
      type="solid"
      icon={<Icon name="add" size={30} color="white" />}
      onPress={() => navigation.navigate('AddPool')}
      containerStyle={{
        bottom: 80,
        right: 20,
        position: 'absolute',
      }}
      buttonStyle={{
        borderRadius: 100,
        height: 50,
        width: 50,
      }}
    />
  </Wrapper>
);

const Wrapper = styled(LinearGradient).attrs({
  colors: [BACKGROUND_PRIMARY, BACKGROUND_SECONDARY],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FlatList = styled.FlatList`
  width: 100%;
`;
export default PoolList;
