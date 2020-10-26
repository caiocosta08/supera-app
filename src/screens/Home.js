import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import logo1 from '../assets/images/logo-1.png';

import { colors, styles } from '../assets/styles/v1';

import { Header } from '../components/Header';
import { LastDocuments } from '../components/LastDocuments';
import { LastSubjects } from '../components/LastSubjects';
import { LastActivity } from '../components/LastActivity';
import { LastPerfomance } from '../components/LastPerfomance';

import {
  BtnCTA, TxtBtnCTA,
  SectionHeader, SectionTitle, SectionButton, SectionButtonTitle,
} from '../assets/styles/styled';

export const Home = ({ navigation }) => {


  const [userToLogin, setUserToLogin] = React.useState({
    email: '',
    password: ''
  });

  const loginUser = (user) => {
    // if(user.email == 'teste@supera.com' && user.password == '123456')
    //   navigation.navigate('Home');
    // else
    //   Alert.alert('Erro', 'Usuário ou senha incorretos');
    navigation.navigate('Home');
  }

  return (
    // <StatusBar barStyle="dark-content" />
    <View style={styles.container3}>
      <Header navigation={navigation} screenTitle="Home" />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>

        <BtnCTA>
          <TxtBtnCTA>Estudar Agora!</TxtBtnCTA>
        </BtnCTA>

        <SectionHeader>
          <SectionTitle>Matérias de Hoje</SectionTitle>
          <SectionButton>
            <SectionButtonTitle>VER MAIS</SectionButtonTitle>
          </SectionButton>
        </SectionHeader>
        <View style={styles.row}>
          <LastSubjects />
        </View>
        
        <SectionHeader>
          <SectionTitle>Editais</SectionTitle>
          <SectionButton>
            <SectionButtonTitle>VER MAIS</SectionButtonTitle>
          </SectionButton>
        </SectionHeader>
        <View style={styles.row}>
          <LastDocuments />
        </View>
        
        <SectionHeader>
          <SectionTitle>Atividade Recente</SectionTitle>
          <SectionButton>
            <SectionButtonTitle>VER MAIS</SectionButtonTitle>
          </SectionButton>
        </SectionHeader>
        <View style={styles.row}>
          <LastActivity />
        </View>
        
        <SectionHeader>
          <SectionTitle>Desempenho 2020</SectionTitle>
          <SectionButton>
            <SectionButtonTitle>VER MAIS</SectionButtonTitle>
          </SectionButton>
        </SectionHeader>
        <View style={styles.row}>
          <LastPerfomance />
        </View>

      </ScrollView>
    </View>

  );
};
