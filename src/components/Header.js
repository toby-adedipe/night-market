import React from 'react';
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <div>
           <Link to="/"><h1>Night Market</h1></Link> 
        </div>
    )
}