import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import Body from './Body';
import './Welcome.css';

function Welcome(props) {
    return (
        <div>
        <div className='welcome-wrapper'>
        <h2 id='welcome'>Welcome to the color Factory</h2> 
        <Link to='/color'><h1>Add a Color</h1></Link>
        </div>
        <Body colorList={props.colorList}/>
        </div>
    );
}

export default Welcome;