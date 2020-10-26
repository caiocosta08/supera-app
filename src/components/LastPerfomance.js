import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//styles
import { styles, colors } from '../assets/styles/v1';

const Perfomance = (props) => {
  React.useEffect(() => {
    // console.log({props})
  }, []);
  return (
    <TouchableOpacity style={{ marginVertical: 3, borderRadius: 5, padding: 5, alignItems: "center", justifyContent: "flex-start", flexDirection: 'row' }}>
      <Text style={{ color: '#333', fontSize: 16, fontWeight: 'bold', minWidth: "15%" }}>{props.month}</Text>
      <View style={{ backgroundColor: (props.percent < 50) ? 'red' : (props.percent < 90 ? 'orange' : "#08D6A0"), marginVertical: 3, borderRadius: 5, padding: 5, alignItems: "center", justifyContent: "flex-start", flexDirection: 'row', width: props.percent * 0.8 + "%", minWidth: 50, maxWidth: "90%" }}>
        <Text style={{  color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{props.percent + "%"}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const LastPerfomance = (props) => {

  const [months, setMonths] = React.useState([
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
  ]);

  return (
    <ScrollView style={{ width: '100%' }} showsHorizontalScrollIndicator={false}>
      {months && months.map(s => {
        return (
          <Perfomance key={s.id} month={s.month} percent={s.percent} navigation={props.navigation} />
        );
      })}
    </ScrollView>
  );
}

