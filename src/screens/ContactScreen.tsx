import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { RootStackParamList } from "../constants/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type ContactScreenProps = NativeStackScreenProps<RootStackParamList, 'Contact'>;

function ContactScreen() {
   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
     return (
        <View>Kontakta oss</View>
     )
}

export default ContactScreen;