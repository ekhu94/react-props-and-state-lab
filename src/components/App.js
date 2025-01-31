import pets from '../data/pets';
import axios from 'axios';
import React from 'react'

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = type => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    const {filters} = this.state;
    let url = '/api/pets';
    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ pets: data });
      });
  }

  onAdoptPet = id => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p;
    });
    this.setState({ pets: pets });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
