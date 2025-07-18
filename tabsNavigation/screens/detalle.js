import {View, Text, StyleSheet} from "react-native";

export default function Detalle(){
    return(
        <View style={styles.container} >
            <Text style={styles.title}>Detalles usuario</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 20,

    },

});