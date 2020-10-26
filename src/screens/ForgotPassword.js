
import * as React from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';

//styles
import { styles } from '../assets/styles/v1';

export const ForgotPassword = ({ navigation }) => {

  // React.useEffect(
  //   () =>
  //     navigation.addListener('beforeRemove', (e) => {

  //       // Prevent default behavior of leaving the screen
  //       e.preventDefault();

  //       // Prompt the user before leaving the screen
  //       Alert.alert(
  //         'Discard changes?',
  //         'You have unsaved changes. Are you sure to discard them and leave the screen?',
  //         [
  //           { text: "Don't leave", style: 'cancel', onPress: () => { } },
  //           {
  //             text: 'Discard',
  //             style: 'destructive',
  //             // If the user confirmed, then we dispatch the action we blocked earlier
  //             // This will continue the action that had triggered the removal of the screen
  //             onPress: () => navigation.dispatch(e.data.action),
  //           },
  //         ]
  //       );
  //     }),
  //   [navigation]
  // );

  const [userToForgot, setuserToForgot] = React.useState({
    email: '',
  });

  const sendMailToForgot = () => {
    Alert.alert('E-mail enviado!', 'Você receberá um link para recuperar sua senha no seu e-mail.',
      [
        { text: "OK", style: 'default', onPress: () => { navigation.navigate('Login') } },
      ]
    );
  }

  return (
    <View style={{ ...styles.container, backgroundColor: '#FFF' }}>
      <Text style={styles.label1}>Recuperação de senha</Text>
      <Text style={styles.label4}>Ao clicar no botão abaixo, será enviado um link de recuperação de senha para o seu e-mail.</Text>
      <TextInput style={styles.txtInput2} value={userToForgot.email} defaultValue={userToForgot.email} onChangeText={(t) => setuserToForgot({ ...userToForgot, email: t })} placeholderTextColor="#999" placeholder="Email para recuperação" />
      <TouchableOpacity style={styles.btn1} onPress={() => sendMailToForgot()}>
        <Text style={styles.btnText1}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}