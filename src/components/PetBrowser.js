import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const filteredPets = this.props.pets.map(p => {
      return <Pet pet={p} onAdoptPet={this.props.onAdoptPet} />
    });
    return (
      <div className="ui cards">
        {filteredPets}
      </div>
    );
  }
}

export default PetBrowser
