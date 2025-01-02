import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CafeScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const [dotPosition, setDotPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const moveDot = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    Animated.spring(dotPosition, {
      toValue: { x: locationX - 15, y: locationY - 15 }, // Offset to center the dot at the click
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={goBack} />
      <TouchableWithoutFeedback onPress={moveDot}>
        <View style={styles.touchArea}>
          <Animated.View
            style={[styles.dot, { transform: [{ translateX: dotPosition.x }, { translateY: dotPosition.y }] }]}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4A484', // Brown background
  },
  touchArea: {
    flex: 1,
  },
  dot: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15,
    position: 'absolute',
  },
});

export default CafeScreen;
