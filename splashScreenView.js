import { StyleSheet, View, Image } from 'react-native';
import Icon from './assets/icon.png';

export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <View>
                <Image 
                style={styles.image}
                source={Icon}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: "cover",
    }
})