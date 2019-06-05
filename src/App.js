import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './components/List/List';
import Pokemon from './components/pokemon/Pokemon';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={List} />
          <Route exact path="/:name" component={Pokemon} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
