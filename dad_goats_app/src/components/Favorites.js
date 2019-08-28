import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Card from './Card'


class Favorites extends Component {
  constructor(props) {
      super(props);
      this.state = {
        jokeFave: '',
        nameFave: ''
      }
    }

  render () {
  // this will create each card component for each fav
    const createFavoriteCards = this.props.favorites.map( (d,i) => {
      return (
        <Card
          jokeFave={d.joke}
          nameFave={d.name}
          key={i}
        />
      )
    })
    return (createFavoriteCards)

  }
}

export default Favorites;
// function Favorites(props) {
// console.log('this is Favorites props', props)
//
//   return (
//     <div>
//       <Card
//         favorites= {props.favorites}
//       />
//     </div>
//   );
// }

// export default Favorites;
