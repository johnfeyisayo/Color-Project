import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Color.css';
import  {useNavigate} from "react-router-dom"

function Color(colorList) {
    const [search, setSearch] = useState("");
    const [selectColor, setSelectColor] = useState("");
    
    const navigate = useNavigate();
    const entries = [{colorName: search, colorHex: selectColor}]
    const records = entries.concat(colorList)
    
    

    const SetAddColor = async(e) =>{
        e.preventDefault()
        // records.push(navigate('/'))
        records.push(entries)
       navigate('/')
       console.log(records)
    }

    return (
        <div className='container'>
        <form>
        <div>
        <label>Enter a Color</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>  
        </div>
        <div>
        <label>Select Color</label>
        <input type="color" name="color" id='color' onChange={(e) => setSelectColor(e.target.value)}/>  
        </div>
        <div>
        <button type="submit" className='add-color' onClick={SetAddColor}>Add Color</button>
        </div>
        <Link to='/'><h3>Go back to Home</h3></Link>
        </form>
        {/* <p>{records}</p> */}
        </div>
    );
}

export default Color;