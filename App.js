import { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, Button , TextInput } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
        <Image 
          source={require('./assets/logo.png')} 
          style={{width: 240, height: 200}}
        />
        <View style={styles.login}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <View style={styles.items}>
            <Text style={styles.label}>Correo</Text>
            <TextInput style={styles.input}/>
          </View>
          <View style={styles.items}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input}/>
          </View>
          <Button style={styles.button} title="Iniciar sesión" color="orange" />
          <Text style={styles.notAccount}>
            No tienes cuenta?
            <Text style={styles.suport}> Soporte</Text>
          </Text>
          <View style={styles.line}></View>
          <Text style={styles.power}>
            Powered by 
          <Text style={styles.company}> Amun Services</Text>
          </Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 80,
  },
  login:{
    flexDirection: "column",
    gap: 15
  },
  title: {
    fontFamily: "Monserrat",
    fontSize: 24,
    fontWeight: "Bold",
    textAlign: "center"
  },
  label: {
    fontSize: 18
  },
  input: {
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    width: 288,
    height: 46
  },
  items: {
    gap: 5
  },
  power: {
    textAlign: "center"
  },
  notAccount: {
    textAlign: "center"
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#D3D3D3"
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#FF7F50"
  }
});

