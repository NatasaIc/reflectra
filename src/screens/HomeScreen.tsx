import { View, Text, StyleSheet, SafeAreaView, Dimensions, Platform, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/style';
import PrimaryButton from '../components/PrimaryButton';
import SidebarMenu from '../components/SidebarMenu';

const { width, height } = Dimensions.get('window');

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderContainer}>
        <View style={styles.headerContainer}>
          <SidebarMenu />
          <View style={styles.logoContainer}>
            {/* <Image source={require('../../assets/images/Reflectra.png')} /> */}
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.primaryHeading}>Evolve your thoughts</Text>
          <Text style={styles.secondaryHeading}>with AI-driven reflective</Text>
          <Text style={styles.tertiaryHeading}>jurnaling</Text>
          <Text style={styles.sloganHeading}>Where feelings find clarity.</Text>
        </View>
        <PrimaryButton onPress={() => navigation.navigate('Registration')}>
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
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    borderWidth: 0.2,
    borderColor: GlobalStyles.colors.text100,
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.lable200,
    opacity: 0.3,
  },
  navigationContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  logoContainer: {
      
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
