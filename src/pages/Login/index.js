import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  keyboard,
  TextInput,
  StatusBar,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
  const [translate] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  // const [logo] = useState(new Animated.ValueXY({ x: 150, y: 150 }));

  useEffect(() => {

    // keyboardDidShowListener = keyboard.addEventListener('KeyboardDidShow', keyboardDidShow);
    // keyboardDidHideListener = keyboard.addEventListener('KeyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(translate.y, {
        toValue: -10,
        speed: 2,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 550,
      })
    ]).start();

  }, []);

  // function keyboardDidShow() {
  //   Animated.parallel([
  //     Animated.timing(logo.x, {
  //       toValue: 70,
  //       duration: 100,
  //     }),
  //     Animated.timing(logo.y, {
  //       toValue: 70,
  //       duration: 100,
  //     })
  //   ]).start();
  // }

  // function keyboardDidHide() {
  //   Animated.parallel([
  //     Animated.timing(logo.x, {
  //       toValue: 150,
  //       duration: 100,
  //     }),
  //     Animated.timing(logo.y, {
  //       toValue: 150,
  //       duration: 100,
  //     })
  //   ]).start();
  // }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        source={require('../../assets/gradient-log.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <StatusBar backgroundColor="#5700D8" />
        <View style={styles.logo} >
          <Animated.Image
            // style={{
            //   width: logo.x,
            //   height: logo.y,
            // }}
            source={require('../../assets/react-purple-1.png')}
          />
        </View>

        <Animated.View style={[
          styles.content,
          {
            opacity: opacity,
            transform: [
              { translateY: translate.y }
            ]
          }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            secureTextEntry
            autoCorrect={false}
            placeholder="Senha"
            style={styles.input}
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.btnText} >Entrar</Text>
          </TouchableOpacity>

        </Animated.View>
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
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    left: 20,
    padding: 10,
    width: '90%',
    fontSize: 16,
    color: '#222',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    left: 20,
    width: 317,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7159c1',
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
});