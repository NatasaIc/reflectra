import { View, Text, SafeAreaView, StyleSheet, Platform, Dimensions, Pressable } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/style';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

type RegistrationProps = NativeStackScreenProps<RootStackParamList, 'Registration'>

function RegistrationScreen() {
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
                  <Icon name="logo-google" size={25} color={ 'blue' } style={{ marginRight: 10 }}/>
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
    marginTop: 50,
    height: Platform.OS === 'android' ? height * 0.7 : height * 0.7,
    borderWidth: 0.2,
    borderColor: GlobalStyles.colors.text100,
    borderRadius: 15,
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
    width: 250,
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
    marginVertical: 20,
  },
  horizontalLines: {
    width: '30%',
    borderBottomWidth: 0.2,
    borderBlockColor: GlobalStyles.colors.text100,
  },
  orText: {
    fontSize: 20,
    fontFamily: 'Roboto-regular',
    color: GlobalStyles.colors.text100,
    marginHorizontal: 10,
  },
});

export default RegistrationScreen;
