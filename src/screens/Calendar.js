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

import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

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

  const [years, setYears] = React.useState([
    2019, 2020
  ]);


  const [data, setData] = React.useState([
    {
      id: 1, year: 2019, months: [
        { id: 1, month: "JAN", percent: 10 },
        { id: 2, month: "FEV", percent: 10 },
        { id: 3, month: "MAR", percent: 10 },
        { id: 4, month: "ABR", percent: 10 },
        { id: 5, month: "MAI", percent: 10 },
        { id: 6, month: "JUN", percent: 10 },
        { id: 7, month: "JUL", percent: 10 },
        { id: 8, month: "AGO", percent: 10 },
        { id: 9, month: "SET", percent: 10 },
        { id: 10, month: "OUT", percent: 10 },
        { id: 11, month: "NOV", percent: 10 },
        { id: 12, month: "DEZ", percent: 10 },
      ],
      middle: (obj) => {
        // console.log({ obj })
        // let length = this.months.length;
        let length = obj.months.length;
        let total = 0;
        // this.months.map(m => {
        obj.months.map(m => {
          total = total + m.percent;
        });
        console.log("Total from " + obj.year + ": " + total)
        return Math.floor(total / length);
      }
    },
    {
      id: 2, year: 2020, months: [
        { id: 1, month: "JAN", percent: 12 },
        { id: 2, month: "FEV", percent: 54 },
        { id: 3, month: "MAR", percent: 2 },
        { id: 4, month: "ABR", percent: 34 },
        { id: 5, month: "MAI", percent: 54 },
        { id: 6, month: "JUN", percent: 23 },
        { id: 7, month: "JUL", percent: 98 },
        { id: 8, month: "AGO", percent: 65 },
        { id: 9, month: "SET", percent: 34 },
        { id: 10, month: "OUT", percent: 12 },
        { id: 11, month: "NOV", percent: 100 },
        { id: 12, month: "DEZ", percent: 55 },
      ],
      middle: (obj) => {
        // console.log({ obj })
        // let length = this.months.length;
        let length = obj.months.length;
        let total = 0;
        // this.months.map(m => {
        obj.months.map(m => {
          total = total + m.percent;
        });
        console.log("Total from " + obj.year + ": " + total)
        return Math.floor(total / length);
      }
    },
  ]);
  const [year, setYear] = React.useState(data[0].year);
  const [month, setMonth] = React.useState(data[0].months[0].month);

  const [currentData, setCurrentData] = React.useState(data);

  const [chartTypes, setChartTypes] = React.useState([
    "BARRA", "PIZZA"
  ]);
  const [chartType, setChartType] = React.useState(chartTypes[0]);

  const test_data = [
    { id: 1, name: "CONCLUÍDO", percent: 70, color: "#66EDFF", legendFontColor: "#7F7F7F", legendFontSize: 10 },
    { id: 2, name: "PENDENTE", percent: 30, color: "#08D6A0", legendFontColor: "#7F7F7F", legendFontSize: 10 },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    // <StatusBar barStyle="dark-content" />
    <View style={styles.container3}>
      <Header navigation={navigation} screenTitle="Calendário" />
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
        
      </ScrollView>
    </View>

  );
};
