import { View, Text } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ReflectionScreenProps = NativeStackScreenProps<RootStackParamList, 'Reflection'>;

function ReflectionScreen() {
  return (
    <View>
      <Text>Reflection</Text>
    </View>
  );
}

export default ReflectionScreen;
