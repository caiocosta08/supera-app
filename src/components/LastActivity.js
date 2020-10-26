import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//styles
import { styles, colors } from '../assets/styles/v1';

const Activity = (props) => {
  React.useEffect(() => {
    // console.log({props})
  }, []);
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Playlist')} style={{ flexDirection: 'row', backgroundColor: (props.status == "pending") ? 'red' : "#08D6A0", flexWrap: 'nowrap', padding: 10, marginVertical: 3, alignItems: 'center', justifyContent: 'space-between', borderRadius: 5 }}>
      <Text style={{ flex: 1, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{props.date}</Text>
      {/* <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>{props.date}</Text> */}
        {(props.status == "completed") && <FontAwesome name="check" size={26} color="#FFF" />}
        {(props.status == "pending") && <FontAwesome name="warning" size={26} color="#FFF" />}
    </TouchableOpacity>
  );
}

export const LastActivity = (props) => {

  const [activities, setActivities] = React.useState([
    { id: 1, status: "pending", date: "05/08/2020" },
    { id: 2, status: "pending", date: "06/08/2020" },
    { id: 3, status: "completed", date: "07/08/2020" },
  ]);

  return (
    // <ScrollView style={styles.documentsContainer} horizontal showsHorizontalScrollIndicator={false}>
    //   {activities && activities.map(s => {
    //     return (
    //       <Activity key={s.id} title={s.title} status={s.status} navigation={props.navigation} />
    //     );
    //   })}
    // </ScrollView>
    <ScrollView style={{ width: '100%' }} showsHorizontalScrollIndicator={false}>
      {activities && activities.map(s => {
        return (
          <Activity key={s.id} status={s.status} date={s.date} navigation={props.navigation} />
        );
      })}
    </ScrollView>
  );
}

