import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Jokes from './components/Jokes';
import Headers from './components/Header';
import { createBrowserHistory } from 'history';
import MusicMaster from './components/MusicMaster';

// ReactDOM.render(<App/>, document.getElementById('root'));

const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" render={() => <Headers><App/></Headers>} />
            <Route path="/jokes" render={() => <Headers><Jokes/></Headers>} />
            <Route path="/musicMatch" render={() => <Headers><MusicMaster/></Headers>} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
// new Promise((resolve, reject) => {
//     setTimeout(resolve("Promise Complete!"), 10000);
// })
// .then(quote => {
//     console.log(quote);
// });