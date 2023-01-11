import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { event, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const CreateTodo = () => {

  const translateY = useSharedValue(0)
  const context = useSharedValue({y: 0})

  const gesture = Gesture.Pan()
  .onStart(() => {
    context.value = { y: translateY.value }
  })
  .onUpdate((e) => {
    translateY.value = e.translationY + context.value.y
    translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT)
  })

  const rCreateTodoStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}]
    }
  }) 

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.createTodoContainer, rCreateTodoStyle]}>
        <View style={styles.line} />
        <Text>CreateTodo</Text>
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  createTodoContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT / 2,
    borderRadius: 25
  },
  line: {
    width: 75, 
    height: 4, 
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  }
})

export default CreateTodo