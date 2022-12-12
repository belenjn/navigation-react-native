/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

export const BasicLateralMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
