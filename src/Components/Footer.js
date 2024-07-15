import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function Footer({navigation}){
    return (
        <View style={styles.footer}>
            <Icon 
                name="home"
                size={30}
                color="#141414"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        borderTopWidth: 1,
        borderTopColor: '#14141420'
    },
    text:{
        fontSize: 18,
        fontWeight: '900'
    }
})