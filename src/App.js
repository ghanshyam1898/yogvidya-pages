import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
    return (
        <div className="App">
            <Landing />
            <Main />
            <div className="all"></div>
            <Footer />
        </div>
    );
}

export default App;
