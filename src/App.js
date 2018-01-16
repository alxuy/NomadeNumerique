import React, {Component} from 'react';
import './App.css';
import Menu from './Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import Accueil from './Accueil';
import Prestations from './Prestations';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>
                    <Route exact path="/" component={Accueil}/>
                    <Route path="/prestations" component={Prestations}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
