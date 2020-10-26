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
import { LastPerfomance } from '../components/LastPerfomance';

import {
  BtnSelect, TxtBtnSelect,
  SectionHeader, SectionTitle, SectionButton, SectionButtonTitle,
  SubjectItem,
  SelectionRow, SelectionTitle,
} from '../assets/styles/styled';

export const Perfomance = ({ navigation }) => {

  const [years, setYears] = React.useState([
    2019, 2020
  ]);


  const [data, setData] = React.useState([
    {
      id: 1, year: 2019, months: [
        { id: 1, month: "JAN", percent: 0 },
        { id: 2, month: "FEV", percent: 10 },
        { id: 3, month: "MAR", percent: 20 },
        { id: 4, month: "ABR", percent: 30 },
        { id: 5, month: "MAI", percent: 40 },
        { id: 6, month: "JUN", percent: 50 },
        { id: 7, month: "JUL", percent: 60 },
        { id: 8, month: "AGO", percent: 70 },
        { id: 9, month: "SET", percent: 80 },
        { id: 10, month: "OUT", percent: 90 },
        { id: 11, month: "NOV", percent: 100 },
        { id: 12, month: "DEZ", percent: 0 },
      ]
    },
    {
      id: 2, year: 2020, months: [
        { id: 1, month: "JAN", percent: 0 },
        { id: 2, month: "FEV", percent: 10 },
        { id: 3, month: "MAR", percent: 20 },
        { id: 4, month: "ABR", percent: 30 },
        { id: 5, month: "MAI", percent: 40 },
        { id: 6, month: "JUN", percent: 50 },
        { id: 7, month: "JUL", percent: 60 },
        { id: 8, month: "AGO", percent: 70 },
        { id: 9, month: "SET", percent: 80 },
        { id: 10, month: "OUT", percent: 90 },
        { id: 11, month: "NOV", percent: 100 },
        { id: 12, month: "DEZ", percent: 0 },
      ]
    },
  ]);
  const [year, setYear] = React.useState(data[0].year);
  const [month, setMonth] = React.useState(data[0].months[0].month);

  const [currentData, setCurrentData] = React.useState(data);

  const [chartTypes, setChartTypes] = React.useState([
    "BARRA", "PIZZA"
  ]);
  const [chartType, setChartType] = React.useState(chartTypes[0]);


  return (
    // <StatusBar barStyle="dark-content" />
    <View style={styles.container3}>
      <Header navigation={navigation} screenTitle="Rendimento" />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>

        <SelectionTitle>ANO</SelectionTitle>
        <SelectionRow>

          {data && data.map(y => {

            return (
              <BtnSelect key={y.year} selected={currentData.findIndex(c => c.year == y.year) != -1 ? true : false} onPress={() => {
                if (currentData.findIndex(c => c.year == y.year) == -1) setCurrentData([...currentData, y]);
                else setCurrentData(currentData.filter(c => c.year != y.year));
              }}>
                <TxtBtnSelect>{y.year}</TxtBtnSelect>
              </BtnSelect>
            );
          })}

        </SelectionRow>

        <SelectionTitle>TIPO DO GRÁFICO</SelectionTitle>
        <SelectionRow>

          {chartTypes && chartTypes.map(c => {

            return (
              <BtnSelect key={c} selected={chartType == c ? true : false} onPress={() => setChartType(c)}>
                <TxtBtnSelect>{c}</TxtBtnSelect>
              </BtnSelect>
            );
          })}

        </SelectionRow>

        <SectionHeader>
          <SectionTitle>Desempenho</SectionTitle>
          <SectionButton>
            <SectionButtonTitle></SectionButtonTitle>
          </SectionButton>
        </SectionHeader>
        {chartType == "BARRA" && <ScrollView style={{ width: '90%' }} showsHorizontalScrollIndicator={false}>
          {currentData && currentData.map(c => {
            return c.months.map(m => {
              return (
                <TouchableOpacity key={m.id + m.month + m.percent} style={{ marginVertical: 0, borderRadius: 5, padding: 5, alignItems: "flex-start", justifyContent: "center" }}>
                  <Text style={{ color: '#333', fontSize: 12, fontWeight: 'bold', minWidth: "15%" }}>{m.month + ' ' + c.year}</Text>
                  <View style={{ backgroundColor: (m.percent < 50) ? 'red' : (m.percent < 90 ? 'orange' : "#08D6A0"), borderRadius: 5, padding: 5, alignItems: "center", justifyContent: "flex-start", flexDirection: 'row', width: m.percent * 0.8 + "%", minWidth: 40, maxWidth: "90%" }}>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{m.percent + "%"}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          })
          }
        </ScrollView>}
      </ScrollView>
    </View>

  );
};
