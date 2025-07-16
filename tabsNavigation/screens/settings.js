import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings({navigation}){
    return(
    <View style={styles.container} >
        <View style={styles.iconRow}>
            <Ionicons name="settings-outline" size={28} color="blue"/>
            <Text style={styles.title}>Configuraciones de usuario</Text>
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
        color:'blue'
    },
})