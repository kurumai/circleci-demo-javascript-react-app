import React, { Component } from 'react';
import './App.css';

import Layout from './Componets/Layout';
import Header from './Componets/Header';
import Container from './Componets/Container';
import Card from './Componets/Card';;;;;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header title={ this.title }/>
        <Container>
          <Card cards={ this.state.cards } />
        </Container>
      </Layout>
    );
  }

  // Baby Hippo Gram
  // National Park Gram
  title = '"National Park Gram"';

  state = {
      cards: []
  };

  componentDidMount() {
    // https://www.reddit.com/r/babyhippos/hot/.json?count=20
    // https://www.reddit.com/r/NationalPark/hot/.json?count=20
      fetch('https://www.reddit.com/r/NationalPark/hot/.json?count=20')
      .then(res => res.json())
      .then((data) => {
          console.log(data.data.children);
          this.setState({ cards: data.data.children })
      })
      .catch(console.log)
  }
}

export default App;


