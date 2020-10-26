import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//styles
import { styles, colors } from '../assets/styles/v1';

const Subject = (props) => {
  React.useEffect(() => {
    // console.log({props})
  }, []);
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Playlist')} style={{ marginHorizontal: 5, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-around', height: 75, backgroundColor: '#FFF', borderRadius: 5 }}>
      <View  style={{ borderRadius: 50, backgroundColor: (props.status == "pending") ? 'red' : "#08D6A0", padding: 10 }}>
        {(props.status == "pending") && <FontAwesome name="warning" size={28} color="#FFF" />}
        {(props.status == "completed") && <FontAwesome name="check" size={28} color="#FFF" />}
      </View>
      <Text style={{ color: '#333', fontSize: 14, fontWeight: 'bold' }}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export const LastSubjects = (props) => {

  const [subjects, setSubjects] = React.useState([
    { id: 1, title: "Matemática", status: "pending" },
    { id: 2, title: "Inglês", status: "pending" },
    { id: 3, title: "Química", status: "completed" },
  ]);

  return (
    <ScrollView style={styles.documentsContainer} horizontal showsHorizontalScrollIndicator={false}>
      {subjects && subjects.map(s => {
        return (
          <Subject key={s.id} title={s.title} status={s.status} navigation={props.navigation} />
        );
      })}
    </ScrollView>
  );
}

