import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';  
import React,{useState} from 'react';

    const showAlert = (message)=>{
        if (Platform.OS === 'web') {
            window.alert(message);
        }else{
            Alert.alert('Alert', message )
        }
        
    }

export default function App() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>React native button text</Text>

            <View style={styles.sectios}>
                <Text style={styles.description}>Botón Basico</Text>
                <Button
                    title='Presioname'
                    onPress={() => showAlert('Boton presionado')}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.description}>Botón con color:</Text>
                <Button
                    title='Boton de color'
                    color="#f194ff"
                    onPress={() => showAlert('Boton de color presionado')}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.description}>Botón deshabilitado:</Text>
                <Button
                    title='Boton deshabilitado'
                    disabled
                    onPress={() => showAlert('Boton de color presionado')}
                />  
            </View>

            <View style={styles.section}>
                <Text style={styles.description}>Dos botones:</Text>
                <View style={styles.buttonRow}>
                    <Button
                        title = 'Izquierda'
                        onPress={() => showAlert('Boton Izquierda presionado')}
                    />
                <View style={styles.buttonSpacer}/>
                    <Button
                        title = 'Derecha'
                        onPress={() => showAlert('Boton Derecho presionado')}
                    />
                </View>
            </View>


            <StatusBar style="auto"/>
        </View>

    );
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            padding:20,
            backgroundColor:"white",
            jutifyContent: 'center',
        },
        title:{
            fontSize:24,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            color:'#000000',
        },

        section:{
            marginBottom:20,

        },

        description:{
            fontSize: 16,
            marginBottom: 10,
            color:'#333333',
        },

        buttonRow:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alingItems: 'center',
        },

        buttonSpacer:{
            width:10,
        },

}); 