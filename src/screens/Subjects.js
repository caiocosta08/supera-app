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
import { StudySubjects } from '../components/StudySubjects';

import {
  BtnCTA, TxtBtnCTA,
  SectionHeader, SectionTitle, SectionButton, SectionButtonTitle,
  SubjectItem,
} from '../assets/styles/styled';

export const Subjects = ({ navigation }) => {

  const [userToLogin, setUserToLogin] = React.useState({
    email: '',
    password: ''
  });


  return (
    // <StatusBar barStyle="dark-content" />
    <View style={styles.container3}>
      <Header navigation={navigation} screenTitle="Matérias" />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>

        <BtnCTA>
          <TxtBtnCTA>Adicionar Matéria</TxtBtnCTA>
        </BtnCTA>

        <SectionHeader>
          <SectionTitle>Todas as Matérias</SectionTitle>
          <SectionButton>
            <SectionButtonTitle>VER MAIS</SectionButtonTitle>
          </SectionButton>
        </SectionHeader>
        <View style={styles.row}>
          <StudySubjects />
        </View>

      </ScrollView>
    </View>

  );
};
