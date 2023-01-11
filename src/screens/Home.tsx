import React from 'react'
import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'

const Home = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Text>Home</Text>
      <Icon name='caretleft' size={100} />    
    </View>
  )
}

export default Home