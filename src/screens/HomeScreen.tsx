import { View, Text, StyleSheet, SafeAreaView, Dimensions, Platform } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/style';
import PrimaryButton from '../components/PrimaryButton';
import UserScreen from './CreateAccountScreen';

const { width, height } = Dimensions.get('window');

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.primaryHeading}>Utveckla dina tankar</Text>
          <Text style={styles.secondaryHeading}>med AI-driven reflekterande</Text>
          <Text style={styles.tertiaryHeading}>dagbok</Text>
          <Text style={styles.sloganHeading}>Där känslor finner klarhet.</Text>
        </View>
        <PrimaryButton onPress={() => navigation.navigate('UserScreen')}>
          Börja skriva
        </PrimaryButton>
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
    borderWidth: 0.2,
    borderColor: GlobalStyles.colors.text100,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.2,
  },
  primaryHeading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.text100,
    marginBottom: 10,
  },
  secondaryHeading: {
    fontFamily: 'CormorantUpright-Regular',
    fontSize: 24,
    color: GlobalStyles.colors.text100,
    marginBottom: 10,
  },
  tertiaryHeading: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.text100,
    marginBottom: 40,
  },
  sloganHeading: {
    fontFamily: 'Roboto-Thin',
    fontSize: 16,
    color: GlobalStyles.colors.text100,
    fontWeight: 'light',
  },
});

export default HomeScreen;
