import React, { Component } from 'react';
import './App.scss';
import UpdateCard from './components/updateCard/updateCard';

import { UPDATECARD } from './Data';


class App extends Component {
  render() {
    return (
      <div className="app">
      {
        UPDATECARD.updates.map((el, index) => {
          return(
            <UpdateCard
              vDate={el.vDate}
              type={el.type}
              image={el.image}
              devName={el.devName}
              text={el.text}
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;