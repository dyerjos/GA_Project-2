import React from 'react';
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      standardText: {
        text:'',
        name:'',
        goat: ''
      },
      favoritesObj:{},
      favorites:[],
    }
  }

  addToFavorites = () => {
  let newObj = {}
  newObj.name = this.state.standardText.name
  newObj.text = this.state.standardText.text
  newObj.goat = this.state.standardText.goat
  let favoritesArr = this.state.favorites.slice()
  favoritesArr.push(newObj)
  this.setState({
    favorites:favoritesArr
  })
}

  makeDadGoat = () => {
    this.getDadJoke1()

    // this.getGoat()
  }

  makeEnGoat = () => {
    // this.getName1()
    this.getQuote()
    // this.getGoat()
  }

  getDadJoke1 = async () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
      })
      .then(res => res.json())
      .then(data => this.setState(prevState => {
        let standardText = { ...prevState.standardText };
        standardText.text = data.joke;
        return { standardText };
      }))
      .then(()=> this.getName1())
  }

  getName1 = async (d) => {
    let url = 'https://randomuser.me/api/?gender=male&nat=us'
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState(prevState => {
        let standardText = { ...prevState.standardText };
        standardText.name = data.results[0].name.first;
        return { standardText };
      }))
      .then(()=> this.getGoat())

  }

  getGoat = () => {
    let goats = this.props.goats
    let randomNum = Math.floor((Math.random() * goats.length))
    let goat = goats[randomNum]
    this.setState(prevState => {
      let standardText = { ...prevState.standardText };
      standardText.goat = goat;
      return { standardText };
    })
  }




  getQuote = async () => {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    let targetUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    fetch (proxyUrl + targetUrl)
    .then(res => res.json())
    .then(data => this.setState(prevState => {
      let standardText = { ...prevState.standardText };
      standardText.text = data.quoteText;
      return { standardText };
    }))
    .then(()=> this.getName1())
}

componentDidMount() {
    this.getDadJoke1()
  }

  render() {
    let allStyles = {
      backgroundColor: 'CadetBlue',
      color: 'white',
      width: '100%',
      height: '100%',
      minHeight: '100vh'
    }
    let h1Styles = {
      textAlign: 'center',
    }
    return (
      <div
        style={allStyles}
        className="App">
        <h1 style={h1Styles}>Dad Goats</h1>
        <Header />
        <Main
          standardText={this.state.standardText}
          favorites = {this.state.favorites}
          onclick1= {this.makeDadGoat}
          onclick2= {this.makeEnGoat}
          onclick3= {this.addToFavorites}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
