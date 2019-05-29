//NewComplaint

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert,Platform } from 'react-native'
import { LinearGradient, Constants, Location, Permissions } from 'expo';

export default class NewComplaint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: '', direccion: '', descripcion: '', location: null,
            errorMessage: null,
        }
    }
    componentDidMount() {
        //this.setState({ usuario: 'liluisjose1' });
        this.setState({ usuario: this.props.navigation.state.params.usuario });
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });

        console.log(location);
    };
    saveData = () => {
        fetch('https://roselike-fillers.000webhostapp.com/UsersApp/denuncia', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario: this.state.usuario,
                direccion: this.state.direccion,
                descripcion: this.state.descripcion,
                longitud: this.state.location.coords.longitude,
                latitud: this.state.location.coords.latitude,

            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson == 0) {
                    Alert.alert(
                        'Exito',
                        "Registro Exitoso",
                        [
                            { text: 'OK', onPress: () => this.props.navigation.navigate('DMHomeScreen') },
                        ],
                        { cancelable: false }
                    )
                } else if (responseJson == 1) {
                    Alert.alert('Error', "Intente Nuevamente");
                } else if (responseJson == 2) {
                    Alert.alert('Error', "El usuario ya existe");
                }

            }).catch((error) => {
                console.error(error);
            });
    }
    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container} >
                <LinearGradient
                    colors={['#622776', '#d4b5de']}
                    style={styles.container} >
                    <View style={styles.logoContainer} >
                        <Image style={styles.logo} source={require('../assets/icon.png')} />
                        <Text style={styles.title} >App Denuncia</Text>
                        <Text style={styles.title} >Nueva Denuncia</Text>
                    </View>
                    <View style={styles.formContainer} >
                        <TextInput onChangeText={(text) => this.setState({ direccion: text })} selectionColor='#642878' placeholder='Introduzca dirección' returnKeyType='next' placeholderTextColor='#fff' underlineColorAndroid="transparent" style={styles.input} />
                        <TextInput onChangeText={(text) => this.setState({ descripcion: text })} selectionColor='#642878' placeholder='Introduzca descripción' returnKeyType='go' placeholderTextColor='#fff' underlineColorAndroid="transparent" style={styles.input} />
                        <TouchableOpacity onPress={this.saveData} style={styles.buttonContainerLogin}>
                            <Text style={styles.buttonText}>Enviar</Text>
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
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
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
    buttonText: {
        textAlign: 'center',
        color: "#fff",
        fontWeight: '700',
    },

});