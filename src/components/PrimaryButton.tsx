import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, Dimensions, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../constants/style';

const { width, height } = Dimensions.get('window');

function PrimaryButton({ children, onPress }: { children: React.ReactNode; onPress?: () => void }) {
  const [pressed, setPressed] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    setPressed(true);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }),
    ]).start();
  };

  const handlePressOut = () => {
    setPressed(false);
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }),
    ]).start();
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }], opacity: opacityAnim }}>
        <Pressable
          style={({ pressed: isPressed }) => [
            styles.button,
            { backgroundColor: isPressed ? GlobalStyles.colors.accent500 : 'transparent' },
          ]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={onPress}
        >
          {/* Left Icon Circle (default state) */}
          {!pressed && (
            <View style={[styles.circleLeft]}>
              <Icon name="arrow-forward" size={16} color={GlobalStyles.colors.text100} />
            </View>
          )}

          {/* Text */}
          <Text
            style={[
              styles.text,
              {
                color: pressed ? GlobalStyles.colors.text100 : GlobalStyles.colors.text100,
                marginRight: pressed ? 10 : 0,
              },
            ]}
          >
            {children}
          </Text>

          {/* Right Icon Circle (pressed/hover state) */}
          {pressed && (
            <View style={styles.circleRight}>
              <Icon name="arrow-forward" size={16} color={GlobalStyles.colors.text100} />
            </View>
          )}
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: height * 0.4,
  },
  button: {
    borderWidth: 0.3,
    borderColor: GlobalStyles.colors.text100,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    minWidth: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circleLeft: {
    position: 'absolute',
    left: 2,
    width: 40,
    height: 40,
    backgroundColor: GlobalStyles.colors.accent500,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleRight: {
    position: 'absolute',
    right: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  text: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    color: GlobalStyles.colors.text100,
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default PrimaryButton;
