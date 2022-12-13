/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon
        name={iconName}
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin}}
      />
    </TouchableOpacity>
  );
};
