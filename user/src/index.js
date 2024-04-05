import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { TodoProvider } from './context/TodoContext';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <ApolloProvider client={client}>
   <TodoProvider>
    <App />
    </TodoProvider>
  </ApolloProvider>,
    </BrowserRouter>
  </React.StrictMode>
);
