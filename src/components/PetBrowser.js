import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const renderedPets = this.props.pets.map(pet => {
      return <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />
    });
    return <div className="ui cards">
      {renderedPets}
    </div>
  }
}

export default PetBrowser;
