import React from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss'
import HomeScreen from './screens/HomeScreen';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
       
    )
};

export default App;

