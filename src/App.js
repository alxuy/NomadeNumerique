import React, {Component} from 'react';
import './App.css';
import Menu from './Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import Accueil from './Accueil';
import Prestations from './Prestations';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
                    <main style={{flex: 1}}>
                        <Menu/>
                        <Route exact path="/" component={Accueil}/>
                        <Route path="/prestations" component={Prestations}/>
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
