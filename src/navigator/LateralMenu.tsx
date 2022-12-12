/* eslint-disable react/react-in-jsx-scope */
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Image, View} from 'react-native';
import {SettingsScreen} from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
};
