import { View, Text } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>;

function PaymentScreen() {
  return (
    <View>
      <Text>Payment</Text>
    </View>
  );
}

export default PaymentScreen;
