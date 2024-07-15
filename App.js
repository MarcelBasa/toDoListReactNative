import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import ChosenTask from './src/screens/ChosenTask';

const Stack=createNativeStackNavigator();

export default function App() {
  // GLOBALSTATE MANAGEMENT
  const [toDoList, setToDoList] = useState([{id: 1, task: 'brush your teeth'}]);
  const [task, setTask] = useState('');
  const [chosenTask, setChosenTask] = useState('');

  const GlobalState = {
    toDoList, setToDoList,
    task, setTask,
    chosenTask, setChosenTask
  }
  // NAVIGATION

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="None" option={{headerShown: false}}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTask" option={{headerShown: false}}>
          {props => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}