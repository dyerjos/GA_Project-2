import React, { Component } from 'react';
import axios from 'axios';
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

const headers = {
  'Accept': 'application/json'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: '',
      id: ''
    }
  }


  getAllDadJokes = async () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
      })
      .then(res => res.json())
      .then(data => this.setState(prevState => ({
      jokes: data.joke,
      id: data.id
      })
    ))

  }

  componentDidMount() {
    this.getAllDadJokes()
  }


  render() {
    console.log('this is the jokes state in app.js', this.state.jokes)
    return (
      <div className="App">
        <h1>Dad Goats</h1>
        <Header />
        <Main
          jokes= {this.state.jokes}
          id= {this.state.id}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
