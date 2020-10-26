import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//styles
import { styles, colors } from '../assets/styles/v1';

const Document = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Playlist')} style={{ marginHorizontal: 5, paddingHorizontal: 10, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-around', height: 75, backgroundColor: '#FFF', borderRadius: 5, backgroundColor: colors[4] }}>
      <FontAwesome name="file-text-o" size={28} color={colors[6]} />
      <View style={{...styles.column3, paddingHorizontal: 10}}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{props.title}</Text>
        <Text style={{ color: '#fff', fontSize: 10, fontWeight: '500' }}>{props.uf || "BRASIL"}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const LastDocuments = (props) => {

  const [check, setCheck] = React.useState(false);

  return (
    <ScrollView style={styles.documentsContainer} horizontal showsHorizontalScrollIndicator={false}>
      <Document title="Polícia Federal" navigation={props.navigation} />
      <Document title="Polícia Militar" uf="PB" navigation={props.navigation} />
      <Document title="ENEM" navigation={props.navigation} />
    </ScrollView>
  );
}

