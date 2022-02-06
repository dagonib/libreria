import React from 'react';
import { Container } from 'react-bootstrap'
// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <h1>Welcome To Librería</h1>
                </Container>
            </main>
            <Footer />
        </>
       
    )
};

export default App;

