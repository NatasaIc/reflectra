import { View, Text } from 'react-native';
import { RootStackParamList } from '../constants/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type UserScreenProps = NativeStackScreenProps<RootStackParamList, 'UserScreen'>;

function UserScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  );
}

export default UserScreen;
