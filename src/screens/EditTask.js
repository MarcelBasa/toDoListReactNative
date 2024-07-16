import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function EditTask({ navigation, GlobalState }) {
    const { toDoList, setToDoList, task, setTask, editTask } = GlobalState;

    const handleSaveEditTask = () => {
        console.log(editTask);
        if (task !== "") {
            toDoList.find(task => task.id === editTask.id).task = task;
            console.log(toDoList.find(task => task.id === editTask.id).id);
            console.log(toDoList);
            setToDoList(toDoList);
        }
        navigation.navigate('Home');
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTask}
                    value={editTask.task}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleSaveEditTask()}
                >
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
            </View>
            <Footer navigation={navigation} />
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
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: '#14141410',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '95%',
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },
    button: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: '#141414',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginBottom: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900'
    }
})