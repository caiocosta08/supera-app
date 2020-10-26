import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import logo3 from '../assets/images/logo-3.png';

import { colors, styles } from '../assets/styles/v1';

export const Login = ({ navigation }) => {


  const [userToLogin, setUserToLogin] = React.useState({
    email: '',
    password: ''
  });

  const loginUser = (user) => {
    // if(user.email == 'teste@hinoselouvores.com' && user.password == '123456')
    //   navigation.navigate('Home');
    // else
    //   Alert.alert('Erro', 'Usuário ou senha incorretos');
    navigation.navigate('Home');
  }

  return (
    // <StatusBar barStyle="dark-content" />
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title1}>LOGIN</Text>
        <Image source={logo3} style={styles.logo2} />
      </View>
      <View style={styles.column}>
        <Text style={styles.title2}>E-mail</Text>
        <View style={styles.row}>
          <FontAwesome name="envelope" size={18} color="#111" />
          <TextInput style={styles.txtInput1} placeholder="Digite seu e-mail" value={userToLogin.email} defaultValue={userToLogin.email} onChangeText={(t) => setUserToLogin({ ...userToLogin, email: t })} />
        </View>
        <Text style={styles.title2}>Senha</Text>
        <View style={styles.row}>
          <FontAwesome name="lock" size={24} color="#111" />
          <TextInput secureTextEntry style={styles.txtInput1} placeholder="Digite sua senha" value={userToLogin.password} defaultValue={userToLogin.password} onChangeText={(t) => setUserToLogin({ ...userToLogin, password: t })} />
        </View>
      </View>
      <View style={styles.column2}>
        <TouchableOpacity style={styles.btn} onPress={() => loginUser(userToLogin)}>
          <Text style={styles.txtBtn}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.txtBtn2}>ESQUECI MINHA SENHA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
