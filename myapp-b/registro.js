import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  Switch,
  ImageBackground,
  ActivityIndicator,
  Image
} from "react-native";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [activo, setActivo] = useState("");

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <View style={styles.containerlogo}>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHubLx7OCbF82zgs7T9zX2GSNWTm_QEL7btQ&s"}}></Image>
        <Text style={styles.text}>Cargando..</Text>
        <ActivityIndicator style={styles.logo} />
      </View>
    );
  }

  const mostrarAlerta = () => {
    if (!nombre || !email) {
      Alert.alert("Error", "Por favor completa los campos", [{ text: "ok" }]);
    } else if (!activo) {
      Alert.alert(
        "Terminos no aceptados",
        "Debes aceptar los terminos y condiciones",
        [{ text: "ok" }]
      );
    } else {
      Alert.alert("Registro exitoso", `Nombre: ${nombre}\nEmail: ${email}`, [
        { text: "ok", onPress: limpiarFormulario()  },
      ]);
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
  };

  const cambiarSwitch = () => {
    setActivo((previousState) => !previousState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.formulario}>
          <Text style={styles.titulo}>Registro de usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo *"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Email *"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.titulo}>Acepta los terminos y condiciones</Text>
          <Switch onValueChange={cambiarSwitch} value={activo} />

          <Button title="Enviar" onPress={mostrarAlerta} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  containerlogo: {
    backgroundColor:"black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: 'white',
    fontSize: 28,
    marginBottom: 20
  },
  formulario: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    size: "large",
    color: "#ffffff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default App;
