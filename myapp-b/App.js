import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';  

    const Texto = (props)=>{
      const {children} = props;
      return(
        <Text>{children}</Text>
      );
    }

export default function App() {
  return (

    <View style={styles.container}>
      <Texto>Hola con children</Texto>
      <Texto>mundo</Texto>
      <StatusBar style="auto" />
      <Button title="obtener"/>
      <Texto>react native</Texto>
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
