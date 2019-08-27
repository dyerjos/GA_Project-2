import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Jokes from './Jokes'
import Inspiration from './Inspiration'
import Favorites from './Favorites'
import Home from './Home'


function Main(props) {
  // console.log('this is main props', props)
  return (

    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Jokes'
        render={() => <
          Jokes {...props}
          />}
        />
        <Route path='/Inspiration' component={Inspiration} />
        <Route path='/About' component={About} />
        <Route path='/Favorites'
        render={() =>
          <Favorites favorites={props.favorites}
          />}

      />
      </Switch>
    </main>
  );

}
export default Main
