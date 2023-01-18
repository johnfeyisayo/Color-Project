import React from 'react';
import { Link } from 'react-router-dom';
import './Color.css';


function Color({ getInput, getSelectedColor, setAddColor }) {

    return (
        <div className='container'>
        <form>
        <div>
        <label>Enter a Color</label>
        <input type="text" onChange={getInput}/>  
        </div>
        <div>
        <label>Select Color</label>
        <input type="color" name="color" id='color' onChange={getSelectedColor}/>  
        </div>
        <div>
        <button type="submit" className='add-color' onClick={ setAddColor}>Add Color</button>
        </div>
        <Link to='/'><h3>Go back to Home</h3></Link>
        </form>
        </div>
    );
}

export default Color;