import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { LinearGradient } from 'expo';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { usuario: '', contra: '' }
  }

  componentWillMount() {
    fetch('http://192.168.1.22/DM/UsersApp/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  validateUser = () => {
    fetch('http://192.168.1.22/DM/UsersApp/getUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: this.state.usuario,
        contra: this.state.contra,

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson == 0) {
          nombre = this.state.usuario;
          this.props.navigation.navigate('DMHomeScreen',{usuario:this.state.usuario})
        } else if (responseJson == 1) {
          Alert.alert('Error', "Usuario o contraseña no existen");
        }

      }).catch((error) => {
        console.error(error);
      });

  }
  render() {
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container} >
        <LinearGradient
          colors={['#622776', '#d4b5de']}
          style={styles.container} >
          <View style={styles.logoContainer} >
            <Image style={styles.logo} source={require('../assets/icon.png')} />
            <Text style={styles.title} >App Denuncia</Text>
            <Text style={styles.title} >Violencia contra la Mujer</Text>
          </View>
          <View style={styles.formContainer} >
            <TextInput onChangeText={(text) => this.setState({ usuario: text })} selectionColor='#642878' placeholder='Introduzca usuario' returnKeyType='next' placeholderTextColor='#fff' underlineColorAndroid="transparent" style={styles.input} />
            <TextInput onChangeText={(text) => this.setState({ contra: text })} selectionColor='#642878' secureTextEntry returnKeyType='go' placeholder='Introduzca contraseña' placeholderTextColor='#fff' underlineColorAndroid="transparent" style={styles.input} />
            <TouchableOpacity onPress={this.validateUser} style={styles.buttonContainerLogin}>
              <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainerNew}>
              <Text onPress={() => this.props.navigation.navigate('NewUserScreen')} style={styles.buttonTextNew}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#fff',
    marginTop: 0,
    width: 300,
    fontSize: 20,
    textAlign: 'center',
    opacity: 0.9
  },
  formContainer: {
    padding: 30,
  },
  input: {
    height: 40,
    backgroundColor: '#C797D7',
    //marginTop: 20,
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  buttonContainerLogin: {
    backgroundColor: "#622776",
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 30,
  },
  buttonContainerNew: {
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: "#fff",
    fontWeight: '700',
  },
  buttonTextNew: {
    textAlign: 'center',
    color: "#642878",
    fontWeight: '700',
    fontStyle: 'italic'

  }

});