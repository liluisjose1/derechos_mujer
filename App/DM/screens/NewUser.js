import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { LinearGradient } from 'expo';

export default class NewUser extends Component {
    constructor(props) {
        super(props);

        this.state = { nombre: '', usuario: '', contra: '' }
    }
    saveData = () => {
        fetch('https://roselike-fillers.000webhostapp.com/UsersApp/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: this.state.nombre,
                usuario: this.state.usuario,
                contra: this.state.contra

            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson == 0) {
                    Alert.alert(
                        'Exito',
                        "Registro Exitoso",
                        [
                            { text: 'OK', onPress: () => this.props.navigation.navigate('HomeScreen') },
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
                        <Text style={styles.title} >Crear cuenta</Text>
                    </View>
                    <View style={styles.formContainer} >
                        <TextInput onChangeText={(text) => this.setState({ nombre: text })} selectionColor='#642878' placeholder='Introduzca nombre' returnKeyType='next' placeholderTextColor='#fff' underlineColorAndroid="transparent" style={styles.input} />
                        <TextInput onChangeText={(text) => this.setState({ usuario: text })} selectionColor='#642878' placeholder='Introduzca usuario' returnKeyType='next' placeholderTextColor='#fff' underlineColorAndroid="transparent" style={styles.input} />
                        <TextInput onChangeText={(text) => this.setState({ contra: text })} selectionColor='#642878' secureTextEntry returnKeyType='go' placeholder='Introduzca contraseña' placeholderTextColor='#fff' underlineColorAndroid="transparent" style={styles.input} />
                        <TouchableOpacity onPress={this.saveData} style={styles.buttonContainerLogin}>
                            <Text style={styles.buttonText}>Crear cuenta</Text>
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