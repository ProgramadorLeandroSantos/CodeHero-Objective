import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as Screens from '../screens';

const App = createStackNavigator();

const AppRoute: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <App.Screen name="Main" component={Screens.Main} />
    </App.Navigator>
  );
};

export default AppRoute;
