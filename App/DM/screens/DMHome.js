import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class DMHome extends Component {
  constructor(props) {
    super(props);

    this.state = { usuario: 'liluisjose1' }
  }
  componentDidMount()
  {
    if(this.props.navigation.state.params.usuario==null){
      this.setState({usuario:'juan'});
    }
    else{
      this.setState({usuario:this.props.navigation.state.params.usuario});
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.logoContainer} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('NewComplaintScreen',{ usuario: this.state.usuario })} >
            <Image style={styles.logo} source={require('../assets/police.png')} />
            <Text style={styles.textt} >Hacer denuncia</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ComplaintScreen',{ usuario: this.state.usuario })} >
            <Image style={styles.logo} source={require('../assets/notify.png')} />
            <Text style={styles.textt} >Mis denuncias</Text>
          </TouchableOpacity>
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
  logo: {
    width: 150,
    height: 150,
  },
  textt:{
    textAlign:'center',
  }
});