import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Content, Item, Input, Button, Text } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Busca extends Component {
  static navigationOptions = {
    title: 'Busca CNPJ'
  };

  constructor (props) {
    super(props);

    this.state = {
      documento: '',
      isLoading: false
    }

    this.realizarConsulta = this.realizarConsulta.bind(this);
    this.setDocumento = this.setDocumento.bind(this);
    this.goToSobre = this.goToSobre.bind(this);
  }

  setDocumento (doc) {
    let docFormatado = '';
    let numbers = '0123456789';

    for (let i = 0; i < doc.length; i++) {
      if (numbers.indexOf(doc[i]) > -1) {
        docFormatado = docFormatado + doc[i];
      } else {
        Alert.alert('Apenas números', 'Você só pode digitar números aqui!');
      }
    }
    this.setState({ documento: docFormatado })
  }

  goToSobre () {
    this.props.navigation.navigate('Sobre');
  }

  realizarConsulta () {
    const doc = this.state.documento;
    const endpoint = 'https://www.receitaws.com.br/v1/cnpj';

    if (doc === '') {
      Alert.alert('Oops!', 'Nenhum documento informado!');
      return false;
    }

    this.setState({ isLoading: true });

    fetch(`${endpoint}/${doc}`)
      .then(response => {
        return response.json();
      })
      .then(docInfo => {
        this.setState({ isLoading: false });

        this.props.navigation.navigate('Resultado', {
          data: docInfo
        })
      })
      .catch(err => {
        this.setState({ isLoading: false });
        Alert.alert('Oops!', 'Houve um erro inesperado ao realizar a consulta. Pro favor, tente novamente mais tarde!');
        console.log(err);
      });
  }

  render () {
    return (
      <Content style={styles.view}>
        <Text style={styles.formLabel}>Informe um CNPJ:</Text>
        <Item regular>
          <Input style={styles.input} placeholder="00.000.000/0000.00" onChangeText={(doc) => this.setDocumento(doc)} maxLength={14} />
        </Item>

        <Button style={styles.button} block onPress={this.realizarConsulta}>
          <Text>Consultar</Text>
        </Button>

        <Button transparent info block style={styles.btnSobre} onPress={this.goToSobre}>
          <Text>Sobre</Text>
        </Button>

        <Spinner visible={this.state.isLoading} textContent={"Consultando..."} textStyle={{ color: '#fff' }} />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 15
  },
  formLabel: {
    paddingBottom: 5,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#fff'
  },
  button: {
    marginTop: 10
  },
  loadingModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  btnSobre: {
    marginTop: 20
  }
})