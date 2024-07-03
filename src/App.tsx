import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from './API/apolloClient';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RepositoryPage from './Pages/RepositoryPage';


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/repo/:owner/:name' element={<RepositoryPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App
