import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//styles
import { colors, styles } from '../assets/styles/v1';
//images
import logo1 from '../assets/images/logo-1.png';

export const Header = (props) => {

  const [check, setCheck] = React.useState(false);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <FontAwesome name="bars" size={28} color={colors[0]} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{props.screenTitle}</Text>
      <Image source={logo1} style={styles.headerLogo} />
    </View>
  );
}

