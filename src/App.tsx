/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CreateTodo } from './components';

import Tabs from './navigation/tabs';


const App = () => {

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Tabs/>
        <CreateTodo/>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
 