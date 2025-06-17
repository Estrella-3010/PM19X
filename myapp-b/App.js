import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';  
import React,{useState} from 'react';

    const Texto = ({style})=>{
      const [contenido, setContenido] = useState('hola mundo');
      actualizartexto=()=>{setContenido('state modificado')};
      return(
        <Text style={[styles.text, style]} onPress={actualizartexto}>
    
          {contenido}
        </Text>
      );
    }

    const Boton = ()=>{
      const [title, setTitle] = useState('presiona');
      actualizarTitulo=()=>{setTitle('titulo modificado')};
      return(
        <Button title={title} onPress={actualizarTitulo}></Button>

      );
    }

export default function App() {
  return (

    <View style={styles.container}>
      <Texto style={styles.rojo}></Texto>
      <Texto style={styles.amarrillo}></Texto>
      <StatusBar style="auto" />
      <Boton/>
      <Texto style={styles.verde}></Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    flexDirection:'column',
  },
  text:{
    color: 'black',
    fontSize: 28,
    width: 100,
    height: 100,
  },
  rojo: {
    backgroundColor: 'red',
  },
  amarrillo: {
    backgroundColor: 'yellow',
  },
  verde: {
    backgroundColor: 'green',
  },
});
