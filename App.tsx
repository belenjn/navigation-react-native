/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {BasicLateralMenu} from './src/navigator/BasicLateralMenu';
import {StackNavigator} from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <BasicLateralMenu /> */}
    </NavigationContainer>
  );
};
