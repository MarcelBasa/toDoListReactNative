import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import Home from './../screens/Home';
import ChosenTask from './../screens/ChosenTask';
import EditTask from '../screens/EditTask';

const Stack = createNativeStackNavigator();

export default function Body() {
  // globalstate management
  const [toDoList, setToDoList] = useState([{ id: 1, task: 'brush your teeth' }]);
  const [task, setTask] = useState('');
  const [chosenTask, setChosenTask] = useState('');
  const [editTask, setEditTask] = useState({ id: null, task: '' });

  const GlobalState = {
    toDoList, setToDoList,
    task, setTask,
    chosenTask, setChosenTask,
    editTask, setEditTask
  }
  
  // navigation
  return (
    <NavigationContainer>
      <StatusBar disabled={true} />
      <Stack.Navigator>

        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTask" options={{ headerShown: false }}>
          {props => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="EditTask" options={{ headerShown: false }}>
          {props => <EditTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
