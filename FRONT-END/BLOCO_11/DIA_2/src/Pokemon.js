import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pok

    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt="Imagem do Pokemon"></img>
      </div>

    )
  }
}

export default Pokemon;