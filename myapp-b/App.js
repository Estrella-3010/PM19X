import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

    const Texto = ()=>{
      return(
        <Text>Hola mundo</Text>
      );
    }

export default function App() {
  return (

    <View style={styles.container}>
      <Texto />
      <StatusBar style="auto" />
      <Button title="obtener"/>
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
