import { View, Text, SafeAreaView, StyleSheet, Platform, Dimensions, Pressable, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

type RegistrationProps = NativeStackScreenProps<RootStackParamList, 'Registration'>

function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.primaryHeading}>Welcome</Text>
            <Text style={styles.secondaryHeading}>Log in or create an account</Text>
            <Text style={styles.tertiaryHeading}>to continue</Text>
          </View>
          
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.buttons}>
              <View style={styles.buttonContainer}>
                  <Icon name="logo-apple" size={30} color={GlobalStyles.colors.primary500} style={{ marginRight: 10 }}/>
                <Text>
                  Start writing with Apple
                </Text>
              </View>
              </Pressable>
              <Pressable style={styles.buttons}>
              <View style={styles.buttonContainer}>
                  <Icon name="logo-google" size={25} color={ GlobalStyles.colors.primary500 } style={{ marginRight: 10 }}/>
                <Text>
                  Start writing with Google
                </Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.horizontalLines}></View>
            <Text style={styles.orText}>OR</Text>
            <View style={styles.horizontalLines}></View>
          </View >

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <View>
              <TextInput 
              style={styles.input} 
              placeholder='example@reflectra.com' 
              placeholderTextColor= '#7B7B7B'
              value={email} 
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              />
            </View>
            <View style={styles.passwordInputContainer}>
              <TextInput  
                placeholder='Password' 
                placeholderTextColor= '#7B7B7B'
                secureTextEntry={!showPassword}
                value={password} 
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Icon name={showPassword ? 'eye-off' : 'eye' } size={22} color={ GlobalStyles.colors.text100 }/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
  },
  borderContainer: {
    width: '95%',
    height: Platform.OS === 'android' ? height * 0.93 : height * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: GlobalStyles.colors.text100,
    borderRadius: 15,
  },
  cardContainer: {
    width: '85%',
    height: Platform.OS === 'android' ? height * 0.7 : height * 0.75,
    borderWidth: 0.2,
    borderColor: GlobalStyles.colors.text100,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: height * 0.04,
  },
  primaryHeading: {
    fontFamily: 'CormorantUpright-Regular',
    fontSize: 40,
    color: GlobalStyles.colors.text100,
    marginBottom: 10,
  },
  secondaryHeading: {
    fontFamily: 'Roboto-light',
    fontSize: 15,
    color: GlobalStyles.colors.text100,
    marginBottom: 10,
  },
  tertiaryHeading: {
    fontFamily: 'Roboto-light',
    fontSize: 15,
    color: GlobalStyles.colors.text100,
    marginBottom: 40,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttons: {
    width: 280,
    height: 60,
    backgroundColor: GlobalStyles.colors.text100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  horizontalLines: {
    width: '36%',
    borderBottomWidth: 0.2,
    borderBlockColor: GlobalStyles.colors.text100,
  },
  orText: {
    fontSize: 20,
    fontFamily: 'Roboto-regular',
    color: GlobalStyles.colors.text100,
    marginHorizontal: 10,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginRight: '70%',
    marginBottom: 7,
    color: GlobalStyles.colors.text100,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  input: {
    width: 280,
    height: 60,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.text100,
    borderWidth: 0.2,
    color: GlobalStyles.colors.lable200,
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 15,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 60,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.text100,
    borderWidth: 0.2,
    backgroundColor: 'transparent',
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  eyeIcon: {
    paddingHorizontal: 100,
  }
});

export default RegistrationScreen;
