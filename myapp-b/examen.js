import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

const API_KEY = '7b7f76c'; 
const BASE_URL = 'https://www.omdbapi.com';

const App = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [tipoBusqueda, setTipoBusqueda] = useState('aproximada'); 
  const [yaSeHizoBusqueda, setYaSeHizoBusqueda] = useState(false);

  const buscarPeliculas = async () => {
    if (!textoBusqueda.trim()) {
      Alert.alert('Error', 'Por favor ingresa el nombre de una película');
      return;
    }

    if (!API_KEY || API_KEY === 'TU_API_KEY_AQUI') {
      Alert.alert(
        'API Key requerida',
        'Para usar esta aplicación, necesitas obtener una API key gratuita de OMDB:\n\n1. Ve a https://www.omdbapi.com/\n2. Solicita una API key gratuita\n3. Reemplaza la API key en el código'
      );
      return;
    }

    setCargando(true);
    setYaSeHizoBusqueda(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const searchParam = tipoBusqueda === 'exacta' ? 't' : 's';
      const url = `${BASE_URL}/?apikey=${API_KEY}&${searchParam}=${encodeURIComponent(textoBusqueda)}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      
      let resultadosFiltrados = [];
      
      if (data.Response === 'True') {
        if (tipoBusqueda === 'exacta') {
          resultadosFiltrados = [data];
        } else {
          resultadosFiltrados = data.Search || [];
        }
      } else {
        resultadosFiltrados = [];
      }
      
      setPeliculas(resultadosFiltrados);
      
    } catch (error) {
      console.error('Error al buscar películas:', error);
      Alert.alert(
        'Error de conexión',
        'No se pudo conectar con la API de OMDB. Verifica tu conexión a internet y tu API key.'
      );
      setPeliculas([]);
    } finally {
      setCargando(false);
    }
  };

  const limpiarBusqueda = () => {
    setTextoBusqueda('');
    setPeliculas([]);
    setYaSeHizoBusqueda(false);
  };

  const obtenerAnio = (year) => {
    return year && year !== 'N/A' ? year : 'N/A';
  };

  const formatearRating = (rating) => {
    return rating && rating !== 'N/A' ? rating : 'N/A';
  };

  const obtenerSinopsis = (plot) => {
    return plot && plot !== 'N/A' ? plot : 'Sin descripción disponible';
  };

  const renderItemPelicula = ({ item }) => (
    <View style={styles.movieItem}>
      <View style={styles.movieImageContainer}>
        <Image
          source={{ 
            uri: item.Poster && item.Poster !== 'N/A'
              ? item.Poster
              : 'https://via.placeholder.com/300x450/cccccc/ffffff?text=Sin+Imagen'
          }}
          style={styles.movieImage}
          defaultSource={{ uri: 'https://via.placeholder.com/300x450/cccccc/ffffff?text=Cargando...' }}
        />
      </View>
      
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle} numberOfLines={2}>
          {item.Title}
        </Text>
        
        <View style={styles.movieDetails}>
          <Text style={styles.movieYear}>
            📅 {obtenerAnio(item.Year)}
          </Text>
          
          <Text style={styles.movieRating}>
            ⭐ {formatearRating(item.imdbRating)}/10
          </Text>
        </View>
        
        <Text style={styles.movieType}>
          🎬 {item.Type ? item.Type.charAt(0).toUpperCase() + item.Type.slice(1) : 'Película'}
        </Text>
        
        <Text style={styles.movieOverview} numberOfLines={3}>
          {obtenerSinopsis(item.Plot)}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎬 Buscador de Películas</Text>
      </View>

      <View style={styles.searchSection}>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe el nombre de una película..."
            placeholderTextColor="#999"
            value={textoBusqueda}
            onChangeText={setTextoBusqueda}
            onSubmitEditing={buscarPeliculas}
            returnKeyType="search"
          />
        </View>

        <View style={styles.searchTypeContainer}>
          <TouchableOpacity
            style={[styles.searchTypeButton, tipoBusqueda === 'aproximada' && styles.searchTypeButtonActive]}
            onPress={() => setTipoBusqueda('aproximada')}
          >
            <Text style={[styles.searchTypeText, tipoBusqueda === 'aproximada' && styles.searchTypeTextActive]}>
              🔍 Búsqueda Aproximada
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.searchTypeButton, tipoBusqueda === 'exacta' && styles.searchTypeButtonActive]}
            onPress={() => setTipoBusqueda('exacta')}
          >
            <Text style={[styles.searchTypeText, tipoBusqueda === 'exacta' && styles.searchTypeTextActive]}>
              🎯 Búsqueda Exacta
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={buscarPeliculas}
            disabled={cargando}
          >
            <Text style={styles.searchButtonText}>
              {cargando ? 'Buscando...' : 'Buscar'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.clearButton}
            onPress={limpiarBusqueda}
          >
            <Text style={styles.clearButtonText}>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {cargando && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ffd700" />
          <Text style={styles.loadingText}>🎬 Buscando películas...</Text>
        </View>
      )}

      {!cargando && yaSeHizoBusqueda && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>
            {peliculas.length === 0 
              ? 'No se encontraron resultados' 
              : `Se encontraron ${peliculas.length} película${peliculas.length !== 1 ? 's' : ''}`
            }
          </Text>
          
          <FlatList
            data={peliculas}
            keyExtractor={(item) => item.imdbID}
            renderItem={renderItemPelicula}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                No se encontraron películas con "{textoBusqueda}"
              </Text>
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    textAlign: 'center',
  },
  searchSection: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#ffd700',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#2a2a2a',
    color: '#fff',
  },
  searchTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchTypeButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffd700',
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
  },
  searchTypeButtonActive: {
    backgroundColor: '#ffd700',
  },
  searchTypeText: {
    color: '#ffd700',
    fontWeight: '600',
    fontSize: 14,
  },
  searchTypeTextActive: {
    color: '#1a1a1a',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    flex: 2,
    backgroundColor: '#c41e3a',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#444',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#0a0a0a',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#ffd700',
    fontWeight: '600',
    letterSpacing: 1,
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#0a0a0a',
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 15,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  movieItem: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#ffd700',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  movieImageContainer: {
    marginRight: 15,
  },
  movieImage: {
    width: 80,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#2a2a2a',
    borderWidth: 1,
    borderColor: '#ffd700',
  },
  movieInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  movieDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  movieYear: {
    fontSize: 14,
    color: '#ffd700',
    fontWeight: '500',
  },
  movieRating: {
    fontSize: 14,
    color: '#ffd700',
    fontWeight: '600',
  },
  movieType: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
    marginBottom: 5,
  },
  movieOverview: {
    fontSize: 14,
    color: '#ccc',
    lineHeight: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffd700',
    marginTop: 50,
    fontStyle: 'italic',
  },
});

export default App;