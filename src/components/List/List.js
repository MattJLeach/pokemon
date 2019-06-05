import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ListItem from '../ListItem/ListItem';
import { Spinner } from '../ui';

const POKEMONS_QUERY = gql`
  query PokemonsQuery {
    pokemons(first: 151) {
      id
      number
      name
      image
    }
  }
`;

export class List extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Pokemon</h1>
        <Query query={POKEMONS_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <Spinner />
              if (error) console.log(error)

              return (
                <div>
                  {
                    data.pokemons.map(pokemon => (
                      <ListItem key={pokemon.id} pokemon={pokemon} />
                    ))
                  }
                </div>
              )
            }
          }
        </Query>
      </div>
    )
  }
}

export default List;