import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Busca from './src/components/Busca';
import Resultado from './src/components/Resultado';
import Sobre from './src/components/Sobre';

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Busca: {
      screen: Busca,
      navigationOptions: () => ({
        headerBackTitle: 'Voltar'
      })
    },
    Resultado: {
      screen: Resultado
    },
    Sobre: {
      screen: Sobre
    }
  },
  {
    initialRouteName: 'Busca',
  }
);