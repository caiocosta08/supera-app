// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { } from '@react-navigation/core';

//images
import logo3 from './src/assets/images/logo-3.png';

//styles
import { colors } from './src/assets/styles/v1';

//screens
import { Login } from './src/screens/Login';
import { ForgotPassword } from './src/screens/ForgotPassword';
import { Splash } from './src/screens/Splash';
import { Home } from './src/screens/Home';
import { Subjects } from './src/screens/Subjects';
import { Perfomance } from './src/screens/Perfomance';

const LogoTitle = () => <Image style={{ width: 25, height: 40 }} source={logo3} />;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Perfomance">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: null }} />
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: null }} />
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword}
          options={{ headerStyle: { backgroundColor: colors[0] }, headerBackTitle: "Voltar", headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: null }} />
        <Drawer.Screen name="Subjects" component={Subjects} options={{ headerShown: null }} />
        <Drawer.Screen name="Perfomance" component={Perfomance} options={{ headerShown: null }} />
      </Drawer.Navigator>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;