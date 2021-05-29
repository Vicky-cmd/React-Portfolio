import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Jokes from './components/Jokes';
import Headers from './components/Header';
import { createBrowserHistory } from 'history';
import MusicMaster from './components/MusicMaster';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers'
import ReminderPro from './components/ReminderPro';

// ReactDOM.render(<App/>, document.getElementById('root'));

const store = createStore(reducer);

const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" render={() => <Headers><App/></Headers>} />
            <Route path="/jokes" render={() => <Headers><Jokes/></Headers>} />
            <Route path="/musicMatch" render={() => <Headers><MusicMaster/></Headers>} />
            <Route path="/reminderPro" render={() => <Headers><Provider store={store}><ReminderPro /></Provider></Headers>} />
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