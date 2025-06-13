import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';  

    const Texto = (props)=>{
      const {contenido} = props;
      return(
        <Text>{contenido}</Text>
      );
    }

export default function App() {
  return (

    <View style={styles.container}>
      <Texto contenido="Hola"/>
       <Texto contenido="mundo"/>
      <StatusBar style="auto" />
      <Button title="obtener"/>
       <Texto contenido="react native"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
