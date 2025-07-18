import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}> Perfil de usuario</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Detalle")}>
          <Text style={styles.buttonText}>Detalle perfil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
    fontWeight: "bold",
    color: "green",
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
    buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },    
});
