
import React, { Component } from 'react'
import { View, Image, KeyboardAvoidingView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Dialogflow_V2 } from "react-native-dialogflow-text";

const BOT_USER = {
  _id: 2,
  name: "SmartBot",
  avatar: "https://roselike-fillers.000webhostapp.com/public/assets/img/theme/Lock_green-512.png"
};

export default class Chat extends Component {
  constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: "Hola, Bienvenida al chat Derechos de Mujer!",
      createdAt: new Date(),
      user: BOT_USER
    };

    this.state = {
      messages: [firstMsg]
    };
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "dialogflow-kqnhud@taller-aseis-dialogflow.iam.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrGY36wtobeNNe\nppFRP9/s4j3VgZqwthuBW/fpxRz2W67MAebZ7uvU+/4WIBLVKThiqU9onmI+ZHfU\nHM/rhfYKXQ17/S5UkCHrJmFZIaaqOi7rqx/0+fD6mrX8Krk2rhqyIu84xa38+sM9\nGe/RRRkhkr4BuV0mqbb7Kv6ndA2PzF8WWdqktz3YJREkCf+v6NyabtGplbtPXQzm\nfgnUZdsWSl9bZz0XEBTfjcsjbmnym1B6mbDn2RfclAQtdC6T/I4OKTqQhdFsBgvv\nYSgiwm/eKx+8csRAflS90psiPC0cAuqIpLMgvhslLfoEy34Hke7vXrbU3DNa9CFE\nsGqEIA6DAgMBAAECggEAP7m32LKj+2FoEDOnogRRSXAGKbQowjJBUk/HqSjCHbuO\nAeufaIIFEgF85A60FPJSTuTSb5u16ZkPzE+i3Qy606dOs2Rb0iEQkP1ten3/Dh23\nhgzpTRueNihTKYVcEFKOHNTIFnQB1lwrRWGYoW/D6W43GHtKh3Dkdu3PhNzDhE+0\nZkF2feOM9effpns5EteTI6CV3QSrkArpYkmVghgmMIyvVPtJmVCKVNEw1TT3fB01\n3zfXWH53mLtw1p48lx/q4YGK+G6sikFneZmuVT5Biqm/2UogoN6aPJnPRiwrepmr\nvYr75glP+s6vBywywkGn97HAm4IbKyQsjodoaMJ2CQKBgQDmf9wC61PIXhY+9YKh\nagre/rGpi3+4bmOCsU957vNP83M+ynP/yGohYJgFSrB8smqDKiuHcQq7dENsze4Z\nPdmARIW34/QrkqP97102S6aM3a331BEoyJDSeInloP7/Vn8eF5KV3gw58xVILDR4\nZZB0zvFf4D1bAl/dmBegXegaHwKBgQC+B2VIVwWP3sEZfvj6bVZBiV3ufZAC5G5J\nfr6ds6eBLPvF9uWZXS7dR1uoA8lXQw6Z2xrUVHsmE/BhJl/M2b6kbpFJtDKIdnNv\nnyhet2By2EO9VDU+g5Ej+LNctCSL2clUfSqOmnoFUJwBYKh0I7H55cKyo2pYjEVF\nu6MMKJnHHQKBgGDkbHq5q511l4pdr8zkg69bhxlLL6Q6mxAMMumBvbvlDZPejMZ/\n28UuEple3TN92HJMnsGvjiBgbhtlsWng6vYVV9SGOVS7rr4HCbrSMC/U29Vqys/H\nB8HBs83YUHjLRmJC7HadQax2d4LAOkpF/2RqvWJdI82HAP9oeL4L245nAoGAH6bT\ns+zqvD/6IekIR44Wo+vhfWvkpNavmAZIcbQO3nFDroGlVJo0yB6uoZmf260LrYzV\nNzCrIniHvWbK5jAOlQzlnkUpdZllON5ltwEMS5TCE7MG+1amwjsWhQZsX+7yneQL\nRp1sXZ5Dnecfp9iaOGmQuHiHqiATGb5bNhc9JfECgYAhPZY4FF6d5d6snK4ZBLJc\nlpgMWkjz+BEltJYRl+M2YoXLv38/639MIBtFjB6b0TDTNPDKGIdVyF01ZtgzIOQU\n2Muyb4IDaHlzZPeIXaDwQJ6hcIteNEqk1XiATWVNYuJVtL1ov0ixAHO4Ik8DF0sJ\nsEvKQwAzNobYzbOXqCMv1g==\n-----END PRIVATE KEY-----\n", Dialogflow_V2.LANG_SPANISH,
      "taller-aseis-dialogflow"
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
          placeholder='Aa'
          locale='es'
        />
      </KeyboardAvoidingView >
    );
  }
}