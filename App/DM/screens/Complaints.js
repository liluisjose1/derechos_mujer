import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Picker, ScrollView } from 'react-native'
import { LinearGradient } from 'expo';
import { Card, ListItem, Button, Icon, PricingCard } from 'react-native-elements'


export default class Complaints extends Component {
  constructor(props) {
    super(props);

    this.state = { usuario: '', data: [], }
  }

  componentWillMount() {
    fetch('https://roselike-fillers.000webhostapp.com/UsersApp/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_usuario: this.props.navigation.state.params.usuario,

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} >
        <View style={styles.formContainer} >
          <ScrollView>
            {
              this.state.data.map((u, i) => {
                if (u.estado == 0) {
                  u.estado = 'No procesa';
                } else if (u.estado == 1) {
                  u.estado = 'En proceso';
                } else if (u.estado == 2) {
                  u.estado = 'Procesada';
                }
                return (
                  <ListItem
                    key={i}
                    onPress={() => Alert.alert("Info", "Dirección: " + u.direccion + '\nDescripcion: ' + u.descripcion
                      + '\nEstado: ' + u.estado + '\nFecha: ' + u.fecha_notificacion)}
                    roundAvatar
                    title={u.descripcion + ' [ ' + u.fecha_notificacion + ' ]'}
                  />
                );
              })
            }
          </ScrollView>
        </View>
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
    padding: 10,
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