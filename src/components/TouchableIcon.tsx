/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  return (
    <TouchableOpacity>
      <Icon
        name={iconName}
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin}}
      />
    </TouchableOpacity>
  );
};
