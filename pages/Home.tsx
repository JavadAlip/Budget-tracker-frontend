import React from 'react';
import { View } from 'react-native';
import Calendar from '../components/homePage/calendar';

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Calendar />
    </View>
  );
};

export default Home;
