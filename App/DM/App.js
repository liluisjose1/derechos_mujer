import React, { Component } from 'react';
import {View, Text, NetInfo, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from "./screens/Home";
import NewUser from "./screens/NewUser";
import DMHome from "./screens/DMHome";
import NewComplaint from "./screens/NewComplaint";
import Complaints from "./screens/Complaints";
import Chat from "./screens/Chat";

const AppNavigator = createStackNavigator({

  HomeScreen: {
    screen: Home,
    navigationOptions: () => ({
      title: `Inicio`,
      headerStyle: {
        backgroundColor: '#622776',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  NewUserScreen: {
    screen: NewUser,
    navigationOptions: () => ({
      title: `Nuevo Usuario`,
      headerStyle: {
        backgroundColor: '#622776',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),

  },
  DMHomeScreen: {
    screen: DMHome,

    navigationOptions: () => ({
      title: `Denuncias`,
      headerStyle: {
        backgroundColor: '#622776',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  NewComplaintScreen: {
    screen: NewComplaint,
    navigationOptions: () => ({
      title: `Nueva Denuncia`,
      headerStyle: {
        backgroundColor: '#622776',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
  // ComplaintScreen: {
  //   screen: Complaints,
  //   navigationOptions: () => ({
  //     title: `Mis Denuncias`,
  //     headerStyle: {
  //       backgroundColor: '#622776',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   }),
  // },
  Chat: {
    screen: Chat,
    navigationOptions: () => ({
      title: `Mi Chat Bot`,
      headerStyle: {
        backgroundColor: '#622776',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionInfo: ''

    }
    this.handleFirstConnectivityChange = this.handleFirstConnectivityChange.bind(this);

  }
  handleFirstConnectivityChange(connectionInfo) {
    this.setState({
      connectionInfo: connectionInfo.type
    })
    console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);

  }

  componentWillMount() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.setState({
        connectionInfo: connectionInfo.type
      })
      //console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    });

    NetInfo.addEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );
  }


  render() {

    if (this.state.connectionInf== '') {
      return (
        <View style={{flex: 1,
          backgroundColor: '#f7fafc',
          alignItems: 'center',
          justifyContent: 'center'}}>
          <Text style={{fontSize: 20,textAlign:'center'}} >Necesitas conexión internet :(</Text>
        </View>
      );
    }

    else {
      return (
        <AppNavigator />
      );
    }
  }
}