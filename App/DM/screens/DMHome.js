import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Linking } from 'react-native'

export default class DMHome extends Component {
  constructor(props) {
    super(props);

    this.state = { usuario: 'admin' }
  }
  componentDidMount() {
    //this.setState({usuario:this.props.navigation.state.params.usuario});

  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.main} >
          <View style={styles.logoContainer} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewComplaintScreen', { usuario: this.state.usuario })} >
              <Image style={styles.logo} source={require('../assets/police.png')} />
              <Text style={styles.textt} >Hacer denuncia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ComplaintScreen', { usuario: this.state.usuario })} >
              <Image style={styles.logo} source={require('../assets/notify.png')} />
              <Text style={styles.textt} >Mis denuncias</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoContainer2} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', { usuario: this.state.usuario })} >
              <Image style={styles.logo} source={require('../assets/chat.png')} />
              <Text style={styles.textt} >Chat Live</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => Alert.alert("Información"," Derechos de la mujer\n Creada por estudiantes UES FMO 2019\n\n Copyright ©")} >
            <Image style={styles.logo} source={require('../assets/info.png')} />
            <Text style={styles.textt} >Información</Text>
          </TouchableOpacity> */}
            <TouchableOpacity onPress={() => { Linking.openURL('tel:911') }} >
              <Image style={styles.logo} source={require('../assets/tel.png')} />
              <Text onPress={() => { Linking.openURL('tel:911'); }} style={styles.funcNavText} style={styles.textt} >Llamada</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
        <Text onPress={() => Alert.alert("Información"," Derechos de la mujer\n Creada por estudiantes UES FMO 2019\n\n Copyright ©")} style={styles.textt2} >Copyright ©</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7fafc',
    flexGrow: 1,
    flexDirection: 'row'

  },
  logoContainer2: {
    //paddingTop: -10,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7fafc',
    flexGrow: 1,
    flexDirection: 'row'

  },
  main: {
    flex: 0.95
  },
  footer: {
    flex: 0.05,
    width:"100%",
    alignItems: 'center',
    backgroundColor:"#7b3b7f"
  },
  logo: {
    width: 150,
    height: 150,
  },
  textt: {
    textAlign: 'center',
  },
  textt2: {
    //paddingTop: ,
    color: "white",
    textAlign: 'center',
    alignItems: 'center',
  }
});