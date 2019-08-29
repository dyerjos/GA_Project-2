import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Card from './Card'


class Favorites extends Component {
  constructor(props) {
      super(props);
      this.state = {
        textFave: '',
        nameFave: ''
      }
    }

  render () {
    console.log('this is favorites props')
  // this will create each card component for each fav
    const createFavoriteCards = this.props.favorites.map( (d,i) => {
      return (
        <Card
          text={d.text}
          name={d.name}
          key={i}
        />
      )
    })
    return (createFavoriteCards)

  }
}

export default Favorites;
