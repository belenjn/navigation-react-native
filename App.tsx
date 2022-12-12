/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {LateralMenu} from './src/navigator/LateralMenu';
import {AuthProvider} from './src/context/AuthContext';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <BasicLateralMenu /> */}
        <LateralMenu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
