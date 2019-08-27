import React, { Component } from 'react';
import axios from 'axios';
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke1: '',
      joke2: '',
      id1: '',
      id2: '',
      name1: '',
      name2: ''
    }
  }


  getDadJoke1 = async () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
      })
      .then(res => res.json())
      .then(data => this.setState(prevState => ({
      joke1: data.joke,
      id1: data.id
      })
    ))
  }

  getDadJoke2 = async () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
      })
      .then(res => res.json())
      .then(data => this.setState(prevState => ({
      joke2: data.joke,
      id2: data.id
      })
    ))
  }

  getName1 = async () => {
    let url = 'https://randomuser.me/api/?gender=male&nat=us'
    let data  = await axios(url)
    console.log('this is data for random name', data);
    this.setState(prevState => ({
      name1: data.data.results[0].name.first
      })
    )
  }

  getName2 = async () => {
    let url = 'https://randomuser.me/api/?gender=male&nat=us'
    let data  = await axios(url)
    this.setState(prevState => ({
      name2: data.data.results[0].name.first
      })
    )
  }


  componentDidMount() {
    this.getDadJoke1()
    this.getDadJoke2()
    this.getName1()
    this.getName2()
  }

  render() {
    console.log('this is name1 in app', this.state.name1)

    let allStyles = {
      backgroundColor: 'CadetBlue',
      color: 'white'
    }

    return (
      <div
        style={allStyles}
        className="App">
        <h1 >Dad Goats</h1>
        <Header />
        <Main
          joke1= {this.state.joke1}
          id1= {this.state.id1}
          name1= {this.state.name1}
          joke2= {this.state.joke2}
          id2= {this.state.id2}
          name2= {this.state.name2}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
