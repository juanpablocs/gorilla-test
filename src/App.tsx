import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, NewTaskScreen } from './screens';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'To-Do App'}} />
        <Stack.Screen name="NewTask" component={NewTaskScreen} options={{title: 'Add Task'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
