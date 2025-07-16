import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile(){
    return(
    <View style={styles.container} >
        <View style={styles.iconRow}>
            <Ionicons name="person-outline" size={28} color="green"/>
            <Text style={styles.title}> Perfil de usuario</Text>
        </View>
    </View>
    );  

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        marginLeft: 10,
        fontWeight: 'bold',
        color:'green'
    },
})