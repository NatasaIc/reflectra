import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import JournalScreen from './src/screens/JournalScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import ReflectionScreen from './src/screens/ReflectionScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/constants/types';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigaton() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Journal" component={JournalScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Reflection"
        component={ReflectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
        'CormorantUpright-Regular': require('./assets/fonts/CormorantUpright-Regular.ttf'),
        'CormorantUpright-Light': require('./assets/fonts/CormorantUpright-Light.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigaton />
          <StatusBar style="light" />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
