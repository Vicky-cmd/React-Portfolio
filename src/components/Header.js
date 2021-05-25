import React from 'react';
import {Link} from 'react-router-dom';

const Headers = ({children}) => {
    const style = {
        display: 'inline-block',
        margin: 10,
        'textDecoration': 'none'
    } 
    return (
        <div>
            <div style={{marginBottom: 30}}>
                <h3 style={style}><Link to="/">Home</Link></h3>
                <h3 style={style}><Link to="/jokes">Jokes</Link></h3>
                <h3 style={style}><Link to="/musicMatch">Music Master</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Headers;