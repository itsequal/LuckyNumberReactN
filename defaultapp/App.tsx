import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const image = require('./src/images/calabaza.png');

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(null);

  const clicked = () => {
    let num = number;
    let n1 = 0;
    let n2 = 0;

    if (name === '' || num == null) {
      Alert.alert('Llena todos los campos');
    } else {
      if (num % 1 != 0 || num <= 0) {
        Alert.alert('Ingresa solo numeros mayores a 0');
      } else {
        if (num > 99) {
          Alert.alert('Ingresa valores menores a 99');
        } else {
          if (num < 10) {
            num = num * 7;
            do {
              n1 = num / 10;
              n1 = Math.floor(n1);
              n2 = num % 10;
              num = n1 + n2;
            } while (num > 10);
            Alert.alert(
              'Bienvenido ' + name,
              'Su número de la suerte es ' + num,
            );
          } else {
            do {
              n1 = num / 10;
              n1 = Math.floor(n1);
              n2 = num % 10;
              num = n1 + n2;
            } while (num >= 10);
            Alert.alert(
              'Bienvenido ' + name,
              'Su número de la suerte es ' + num,
            );
          }
        }
      }
    }
  };
  return (
    <View style={styles.Container}>
      <Image source={image} style={{width: 200, height: 200}} />
      <Text style={styles.Text}>Inserta tu nombre</Text>
      <TextInput placeholder="Tu nombre aqui" onChangeText={setName} />
      <Text style={styles.Text}>Inserta tu edad</Text>
      <TextInput
        placeholder="Tu edad aqui"
        keyboardType="numeric"
        onChangeText={setNumber}
      />
      <Button title="presioname" color="orange" onPress={clicked} />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 2,
  },
});

export default App;
