import React from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet
} from 'react-native';

import logo1 from '../assets/images/logo-1.png';
import logo2 from '../assets/images/logo-2.png';

import { colors, styles } from '../assets/styles/v1';

export const Splash = ({ navigation }) => {

  // React.useEffect( () => {
  //   setTimeout(() => {
  //     navigation.navigate('Login');
  //   }, 2500);
  // }, );


    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <Image source={logo2} style={styles.logo1} />
            </View>
        </>
    );
};
