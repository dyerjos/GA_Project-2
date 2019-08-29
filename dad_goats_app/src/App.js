import React, { Component } from 'react';
import axios from 'axios';
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardInspiration: {
        text:'',
        name:''
      },
      standardText: {
        text:'',
        name:''
      },
      favoritesObj:{},
      favorites:[],
    }
  }

  addToFavorites = () => {
  let newObj = {}
  newObj.name = this.state.standardText.name
  newObj.text = this.state.standardText.text
  let favoritesArr = this.state.favorites.slice()
  favoritesArr.push(newObj)
  this.setState({
    favorites:favoritesArr
  })
}

  makeDadGoat = () => {
    this.getDadJoke1()
    this.getName1()
  }

  makeEnGoat = () => {
    this.getName1()
    this.getQuote()
  }

  getDadJoke1 = async () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
      })
      .then(res => res.json())
      .then(data => this.setState(prevState => ({
      standardText: {
        text: data.joke,
        name: ''
      },
      joke1: data.joke,
      })
    ))
  }

  getName1 = async () => {
    let url = 'https://randomuser.me/api/?gender=male&nat=us'
    let data  = await axios(url)
    let standardText = {...this.state.standardText}
    standardText.name = data.data.results[0].name.first
    this.setState(prevState => ({
      name1: data.data.results[0].name.first,
      standardText,
      })
    )
  }

  getQuote = async () => {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let targetUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    let data  = await axios(proxyUrl + targetUrl)
    this.setState(prevState => ({
      standardText: {
        text: data.data.quoteText,
        name: ''
      },
      quote: data.data.quoteText
      })
    )
  }

  // componentDidMount() {
  //   this.getDadJoke1()
  //   this.getName1()
  //   this.getQuote()
  // }

  render() {
    let allStyles = {
      backgroundColor: 'CadetBlue',
      color: 'white',
      width: '100%',
      height: '100%',
      minHeight: '100vh'
    }

    return (
      <div
        style={allStyles}
        className="App">
        <h1 >Dad Goats</h1>
        <Header />
        <Main
          standardText={this.state.standardText}
          joke1= {this.state.joke1}
          id1= {this.state.id1}
          name1= {this.state.name1}
          favorites = {this.state.favorites}
          quote= {this.state.quote}
          onclick1= {() => this.makeDadGoat()}
          onclick2= {() => this.makeEnGoat()}
          onclick3= {() => this.addToFavorites()}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
