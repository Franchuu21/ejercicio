import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';

export default function App() {
  const [tienePermiso, setTienePermiso] = useState(null);
  const [escaneado, setEscaneado] = useState(false);
  const [datosEscaneados, setDatosEscaneados] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setTienePermiso(status === 'granted');
    })();
  }, []);

  const manejarCodigoDeBarrasEscaneado = ({ type, data }) => {
    setEscaneado(true);
    setDatosEscaneados(data);
  };

  const copyToClipboard = () => {
    if (datosEscaneados) {
      Clipboard.setString(datosEscaneados);
      alert('Texto copiado al portapapeles');
    }
  };

  const shareOnWhatsApp = async () => {
    if (datosEscaneados) {
      try {
        const url = `whatsapp://send?text=${encodeURIComponent(datosEscaneados)}`;
        await Linking.openURL(url);
      } catch (error) {
        console.error('Error al compartir en WhatsApp', error.message);
      }
    }
  };
  
  
  

  return (
    <View style={styles.contenedor}>
      <BarCodeScanner
        onBarCodeScanned={escaneado ? undefined : manejarCodigoDeBarrasEscaneado}
        style={StyleSheet.absoluteFillObject}
      />
      {escaneado && (
        <View style={styles.contenedorDatos}>
          <Text style={styles.textoDatos}>{datosEscaneados}</Text>
          <TouchableOpacity onPress={copyToClipboard} style={styles.button}>
            <Text style={styles.buttonText}>Copiar al Portapapeles</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={shareOnWhatsApp} style={styles.button}>
            <Text style={styles.buttonText}>Compartir en WhatsApp</Text>
          </TouchableOpacity>
        </View>
      )}
      {tienePermiso === null && (
        <Text>Esperando permiso para acceder a la cámara.</Text>
      )}
      {tienePermiso === false && (
        <Text>No tienes permiso para acceder a la cámara.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorDatos: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  textoDatos: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
