import React from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, Image, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        source={require('../../assets/gradient-log.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.logo} >
          <Image
            source={require('../../assets/react-purple-1.png')}
          />
        </View>

        <View style={styles.content} >
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TouchableOpacity style={styles.button} >
            <Text>Entrar</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    width: '90%',
    fontSize: 16,
    color: '#222',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    
  },
});