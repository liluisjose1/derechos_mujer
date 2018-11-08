//NewComplaint

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { LinearGradient } from 'expo';

export default class NewComplaint extends Component {
    constructor(props) {
        super(props);

        this.state = { usuario: '', direccion: '', descripcion: '' }
    }
    componentDidMount() {
        this.setState({ usuario: this.props.navigation.state.params.usuario })
    }
    saveData = () => {
        fetch('http://192.168.1.22/DM/UsersApp/denuncia', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario: this.state.usuario,
                direccion: this.state.direccion,
                descripcion: this.state.descripcion,

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