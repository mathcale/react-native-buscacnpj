import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, List, ListItem, Body, Separator, Card, CardItem, Icon } from 'native-base';

export default class Resultado extends Component {
  static navigationOptions = {
    title: 'Resultado da Busca'
  };

  constructor (props) {
    super(props)
  }

  render () {
    const { navigation } = this.props;
    const data = navigation.getParam('data', null);

    if (data.status === 'ERROR') {
      return (
        <Container>
          <Card style={styles.errorCard}>
            <CardItem style={styles.errorCardContent}>
              <Icon name="alert" style={{color: '#fff'}} />
              <Text style={styles.errorText}>{data.message}</Text>
            </CardItem>
          </Card>
        </Container>
      )
    } else {
      return (
        <Container>
          <Content>
            <List style={styles.list}>
              <Separator>
                <Text>INFORMAÇÕES GERAIS</Text>
              </Separator>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Razão Social</Text>
                  <Text note>{data.nome}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Nome Fantasia</Text>
                  <Text note>{data.fantasia}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Situação</Text>
                  <Text note>{data.situacao}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Tipo</Text>
                  <Text note>{data.tipo}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Natureza Jurídica</Text>
                  <Text note>{data.natureza_juridica}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Abertura</Text>
                  <Text note>{data.abertura}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Capital Social</Text>
                  <Text note>{data.capital_social}</Text>
                </Body>
              </ListItem>

              <Separator>
                <Text>ENDEREÇO</Text>
              </Separator>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Logradouro</Text>
                  <Text note>{data.logradouro}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Número</Text>
                  <Text note>{data.numero}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Complemento</Text>
                  <Text note>{data.complemento}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>CEP</Text>
                  <Text note>{data.bairro}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Bairro</Text>
                  <Text note>{data.bairro}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Município</Text>
                  <Text note>{data.municipio}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Estado</Text>
                  <Text note>{data.uf}</Text>
                </Body>
              </ListItem>

              <Separator>
                <Text>DADOS DE CONTATO</Text>
              </Separator>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Telefone</Text>
                  <Text note>{data.telefone}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>E-mail</Text>
                  <Text note>{data.email}</Text>
                </Body>
              </ListItem>

              <Separator>
                <Text>ATIVIDADE PRINCIPAL</Text>
              </Separator>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Descrição</Text>
                  <Text note>{data.atividade_principal[0].text}</Text>
                </Body>
              </ListItem>

              <ListItem>
                <Body>
                  <Text style={styles.listTitle}>Código CNAE</Text>
                  <Text note>{data.atividade_principal[0].code}</Text>
                </Body>
              </ListItem>

              <Separator>
                <Text>ATIVIDADES SECUNDÁRIAS</Text>
              </Separator>

              {data.atividades_secundarias.map((atividade, index) => {
                return (
                  <ListItem key={atividade.code}>
                    <Body>
                      <Text style={styles.listTitle}>Descrição #{index+1}</Text>
                      <Text note>{atividade.text}</Text>
                    </Body>
                  </ListItem>
                )
              })}

              <Separator>
                <Text>QUADRO DE SÓCIOS E ADMINISTRADORES</Text>
              </Separator>

              {data.qsa.map((socio, index) => {
                return (
                  <ListItem key={index}>
                    <Body>
                      <Text style={styles.listTitle}>{socio.nome}</Text>
                      <Text note>{socio.qual}</Text>
                    </Body>
                  </ListItem>
                )
              })}
            </List>

            <Text style={styles.footerText} note>Informações obtidas através da API gratuita fornecida pelo site receitaws.com.br.</Text>
          </Content>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff'
  },
  listTitle: {
    paddingBottom: 3,
    fontWeight: 'bold'
  },
  footerText: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 12
  },
  errorCard: {
    padding: 15,
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  errorCardContent: {
    backgroundColor: '#e74c3c',
    padding: 10
  },
  errorText: {
    color: '#fff'
  }
})