import React from 'react';
import {Link} from 'react-router-dom';
import HeaderInfo from './HeaderInfo';

const Headers = ({children}) => {
    const style = {
        display: 'inline-block',
        margin: 10,
        'textDecoration': 'none'
    } 
    return (
        <div>
            <HeaderInfo/>
            <div style={{marginBottom: 30}}>
                <h3 style={style}><Link to="/about-me">Home</Link></h3>
                <h3 style={style}><Link to="/about-me/jokes">Jokes</Link></h3>
                <h3 style={style}><Link to="/about-me/musicMatch">Music Master</Link></h3>
                <h3 style={style}><Link to="/about-me/reminderPro">Reminder Pro</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Headers;