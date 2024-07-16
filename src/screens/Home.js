import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home({ navigation, GlobalState }) {
    const { toDoList, setToDoList, task, setTask, setChosenTask } = GlobalState;
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setToDoList(prevState => [...prevState, { id: 2, task: 'go to bed' }])
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View>
            <TouchableOpacity
                style={styles.task}
                onPress={() => handleChooseTask(item)}
            >
                <Text>
                    {item.task}
                </Text>
                
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginLeft: 5}}>
                    <View style={styles.inBoxButton}>
                        <Button 
                        color="#000"
                        title="Copy" 
                        //onPress={() => handleCopyTask(item)}
                        />
                    </View>
                    <View style={styles.inBoxButton}>
                        <Button 
                        color="#000"
                        title="Edit"  
                        onPress={() => handleEditTask(item)}
                        />
                    </View>
                    <View style={styles.inBoxButton}>
                        <Button 
                        color="red"
                        title="Delete" 
                        onPress={() => handleDeleteTask(item)}
                        />
                    </View>
                </View>
            </View>
        );
    }

    const handleDeleteTask = (item) => {
        setToDoList(prevState => prevState.filter(task => task.id !== item.id));
    }
    
    const handleEditTask = (item) => {
        
    };

    const handleCopyTask = (task) => {
        Alert.alert('Copied to clipboard');
        return;
    };

    const handleSaveTask = () => {

        if(task !== ""){
            const index = toDoList.length + 1;
            setToDoList(prevState => [...prevState, { id: index, task: task }]);
    
            setTask('');
        }
    }

    const handleChooseTask = (item) => {
        setChosenTask(item);
        navigation.navigate('ChosenTask');
    }

    const filteredToDoList = toDoList.filter(item =>
        item.task.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    placeholder="Search"
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={setTask}
                    value={task}
                    placeholder="To do task..."
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleSaveTask()}
                >
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
                <FlatList 
                    data={filteredToDoList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
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
        backgroundColor: '#14141410'
    },
    task: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
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
        elevation: 4,
    },
    button: {
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
    },
    inBoxButton: {
        marginLeft: 5,
        borderRadius: 12
    }
})
