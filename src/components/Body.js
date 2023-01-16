import React from 'react';
import { Link } from "react-router-dom";

function Body({colorList}) {
    return (
        <div>
        <div>
        <h2>Please Select a Color</h2>
        </div>
        {colorList.map((color, index) => 
                <p key={index}><Link to={`/colorPage/${color.colorName}/${color.colorHex.substring(1).toUpperCase()}`}>{color.colorName}</Link></p>)}
        
        </div>
    );
}

export default Body;