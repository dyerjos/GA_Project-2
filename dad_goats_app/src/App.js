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
      joke1: '',
      // joke2: '',
      id1: '',
      // id2: '',
      name1: '',
      // name2: ''
      favoritesObj:{},
      favorites:[],
      quote: ''
    }
  }



  addToFavorites = () => {
  let newObj = {}
  newObj.id = this.state.id1;
  newObj.name = this.state.name1;
  newObj.joke = this.state.joke1;
  newObj.quote = this.state.quote;
  let favoritesArr = this.state.favorites.slice()
  favoritesArr.push(newObj)
  console.log('this is fav arr', favoritesArr)
  this.setState({
    favorites:favoritesArr
  })
}

  makeDadGoat = () => {
    this.getDadJoke1()
    // this.getDadJoke2()
    this.getName1()
    // this.getName2()
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
      id1: data.id
      })
    ))
  }

  // getDadJoke2 = async () => {
  //   fetch('https://icanhazdadjoke.com/', {
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //     })
  //     .then(res => res.json())
  //     .then(data => this.setState(prevState => ({
  //     joke2: data.joke,
  //     id2: data.id
  //     })
  //   ))
  // }

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
    console.log('this is quote data', data)
    this.setState(prevState => ({
      quote: data.data.quoteText
      })
    )
  }

  // getName2 = async () => {
  //   let url = 'https://randomuser.me/api/?gender=male&nat=us'
  //   let data  = await axios(url)
  //   this.setState(prevState => ({
  //     name2: data.data.results[0].name.first
  //     })
  //   )
  // }


  componentDidMount() {
    this.getDadJoke1()
    // this.getDadJoke2()
    this.getName1()
    // this.getName2()
    this.getQuote()
  }

  render() {
    // console.log(this.state.favorites)
    let allStyles = {
      backgroundColor: 'CadetBlue',
      color: 'white',
      width: '100%',
      height: '100%',
      minHeight: '100vh'
    }

    let buttonStyles = {
      position: 'relative',
      textAlign: 'center',
      width: '50%',
      fontSize: '20px',
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
        />
        <button
          type="button"
          style={buttonStyles}
          onClick={this.makeDadGoat}
          >Make Dad Goat
        </button>
        <button
        type="button"
        style={buttonStyles}
        onClick={this.addToFavorites}
        >Send to Favorites
        </button>
        <Footer />
      </div>
    );
  }
}

export default App;
