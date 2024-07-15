import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home({ navigation, GlobalState }){
    const { toDoList, setToDoList, task, setTask, setChosenTask } = GlobalState;

    useEffect(() => {
        setToDoList(prevState => [...prevState, {id: 2, task: "go to bed"}])
    }, []);

    const renderItem = ({item}) => {
        return (
        <TouchableOpacity
            style={styles.task}
            onPress={()=>handleChooseTask(item)}
        >

            <Text>{item.task}</Text>
        </TouchableOpacity>
        );
    }

    const handleSaveTask = () => {
        const index = toDoList.length +1;

        setToDoList(prevState => [...prevState, {id: index, task: task}])

        setTask('');
    }

    const handleChooseTask = (item) => {
        setChosenTask(item);
        navigation.navigate("ChosenTask");
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setTask}
                    value={task}
                    placeholder='To do task...'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSaveTask()}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <FlatList 
                    data={toDoList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body:{
        flex: 8,
        width: '100%'
    },
    task:{
        padding: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1
    },    
    input:{
        padding: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1
    },
    button:{
        backgroundColor: "#141414",
        padding: 10,
        maring: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1
    },
    buttonText:{
        color: 'white'
    }
})