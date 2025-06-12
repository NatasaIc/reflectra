import { View, Text } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type JournalScreenProps = NativeStackScreenProps<RootStackParamList, 'Journal'>;

function JournalScreen() {
  return (
    <View>
      <Text>Journal</Text>
    </View>
  );
}

export default JournalScreen;
