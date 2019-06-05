import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Image, Spinner } from '../ui';

const POKEMON_QUERY = gql`
  query PokemonQuery($name: String!) {
    pokemon(name: $name) {
      image
      number
      name
      types
      resistant
      weaknesses
    }
  }
`;

export class Pokemon extends Component {
  render() {
    let { name } = this.props.match.params;
    console.log(name)
    return (
      <div>
        <Query query={POKEMON_QUERY} variables={{name}}>
          {
            ({ loading, error, data}) => {
              if(loading) return <Spinner />
              if(error) console.log(error)
              console.log(data)
              const { image, name, number, resistant, types, weaknesses } = data.pokemon;
              return (
                <div className="text-center">
                  <h1>#{number} - {name}</h1>
                  <Image src={image} alt={name} />
                  <p><strong>Types:</strong> {types.join(' ')}</p>
                  <p><strong>Resistant:</strong> {resistant.join(' ')}</p>
                  <p><strong>Weaknesses:</strong> {weaknesses.join(' ')}</p>
                </div>
              )
            }
          }
        </Query>
      </div>
    )
  }
}

export default Pokemon
