import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Container, Content, Text, Thumbnail } from 'native-base';

export default class Sobre extends Component {
  static navigationOptions = {
    title: 'Sobre o App'
  };

  constructor (props) {
    super(props);
  }

  render () {
    const uri = 'https://matheus.me/assets/img/eu.jpg';
    const githubProfile = 'https://github.com/mathcale/react-native-buscacnpj';

    return (
      <Container>
        <Content contentContainerStyle={styles.sobre}>
          <Thumbnail large source={{ uri: uri }} style={styles.avatar} />

          <Text style={styles.text}>Criado por Matheus Calegaro</Text>
          <Text style={styles.text}>para estudar React Native</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(githubProfile)}>Github</Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  sobre: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  },
  link: {
    paddingTop: 5,
    color: '#555',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
