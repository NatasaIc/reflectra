import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { RootStackParamList } from "../constants/types";
import { GlobalStyles } from "../constants/style";

function SidebarMenu() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [menuVisible, setMenuVisible] = useState(false);

  return(
    <View style={styles.container}>
      {/* Hamburger Menu Button */}
      <TouchableOpacity 
        style={styles.menuButton}
        onPress={() => setMenuVisible(true)}
      >
        <Ionicons name="menu" size={24} color={GlobalStyles.colors.text100} />
      </TouchableOpacity>

      {/* Sidebar Modal */}
      <Modal 
        visible={menuVisible}
        transparent
        animationType='slide'
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity 
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.sidebar}>
            <View style={styles.sidebarHeader}>
              <View style={styles.headerSpacer} />
              <TouchableOpacity onPress={() => setMenuVisible(false)}>
                <Ionicons name="close" size={24} color={GlobalStyles.colors.text100} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.menuItems}>
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigation.navigate('Registration');
                }}
              >
                <Ionicons name="create-outline" size={20} color={GlobalStyles.colors.text100} />
                <Text style={styles.menuText}>Get started</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigation.navigate('Contact');
                }}
              >
                <Ionicons name="mail-outline" size={20} color={GlobalStyles.colors.text100} />
                <Text style={styles.menuText}>Contact us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1000,
  },
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    top: '6.5%',
    right: '3%',
    width: '94%',
    height: '20%',
    borderRadius: 15,
    backgroundColor: GlobalStyles.colors.primary500,
    borderLeftColor: GlobalStyles.colors.text100,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: GlobalStyles.colors.text100,
  },
  headerSpacer: {
    flex: 1,
  },
  menuItems: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    justifyContent: 'center',
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontFamily: 'Roboto-light',
    letterSpacing: 1.3,
    color: GlobalStyles.colors.text100,
  },
});

export default SidebarMenu;