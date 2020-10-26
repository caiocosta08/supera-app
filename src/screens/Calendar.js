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
  Dimensions
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { FontAwesome } from '@expo/vector-icons';

import logo1 from '../assets/images/logo-1.png';

import { colors, styles } from '../assets/styles/v1';

import { Header } from '../components/Header';
import { LastPerfomance } from '../components/LastPerfomance';

import {
  BtnSelect, TxtBtnSelect,
  SectionHeader, SectionTitle, SectionButton, SectionButtonTitle,
  SubjectItem,
  SelectionRow, SelectionTitle,
} from '../assets/styles/styled';

export const Calendar = ({ navigation }) => {

  const [months, setMonths] = React.useState(["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]);
  const [month, setMonth] = React.useState(months[0]);

  const [years, setYears] = React.useState(["2019", "2020"]);
  const [year, setYear] = React.useState(years[0]);

  return (
    // <StatusBar barStyle="dark-content" />
    <View style={styles.container3}>
      <Header navigation={navigation} screenTitle="Calendário" />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>

        <SelectionTitle>ANO</SelectionTitle>
        <SelectionRow>
          <Picker
            selectedValue={year}
            style={{ width: '100%', borderRadius: 10 }}
            itemStyle={{ backgroundColor: "rgba(0,0,0,0.1)", height: 75, borderRadius: 10, padding: 10 }}
            onValueChange={(itemValue, itemIndex) => setYear(itemValue)}>
            {years && years.map(y => <Picker.Item key={y} label={y} value={y} />)}
          </Picker>
        </SelectionRow>

        <SelectionTitle>MÊS</SelectionTitle>
        <SelectionRow>
          <Picker
            selectedValue={month}
            style={{ width: '100%', borderRadius: 10 }}
            itemStyle={{ backgroundColor: "rgba(0,0,0,0.1)", height: 75, borderRadius: 10, padding: 10 }}
            onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}>
            {months && months.map(m => <Picker.Item key={m} label={m} value={m} />)}
          </Picker>
        </SelectionRow>

        <SectionHeader>
          <SectionTitle>Desempenho</SectionTitle>
          <SectionButton>
            <SectionButtonTitle></SectionButtonTitle>
          </SectionButton>
        </SectionHeader>

      </ScrollView>
    </View >

  );
};
