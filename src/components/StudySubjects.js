import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//styles
import { styles, colors } from '../assets/styles/v1';
import {
  BtnCTA, TxtBtnCTA,
  SectionHeader, SectionTitle, SectionButton, SectionButtonTitle,
  SubjectItem, SubjectTitle,
  TrashIcon,
} from '../assets/styles/styled';

const Subject = (props) => {
  React.useEffect(() => {
    // console.log({props})
  }, []);
  return (
    <SubjectItem>
      <SubjectTitle>{props.title}</SubjectTitle>
      <TrashIcon>
        <FontAwesome name="trash" size={24} color="#FFF" />
      </TrashIcon>
    </SubjectItem>
  );
}

export const StudySubjects = (props) => {

  const [subjects, setSubjects] = React.useState([
    { id: 1, title: "Matemática", status: "pending" },
    { id: 2, title: "Inglês", status: "pending" },
    { id: 3, title: "Química", status: "completed" },
  ]);

  return (
    <ScrollView style={{ width: '100%' }} showsHorizontalScrollIndicator={false}>
      {subjects && subjects.map(s => {
        return (
          <Subject key={s.id} title={s.title} status={s.status} navigation={props.navigation} />
        );
      })}
    </ScrollView>
  );
}

