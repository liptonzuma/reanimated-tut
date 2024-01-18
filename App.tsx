import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withDelay(
      1000,
      withRepeat(
        withSpring(2, {
          duration: 2000,
        }),
        -1,
        true
      )
    );
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ scale }] }]} />
    </View>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
