import React from 'react'
import './App.css';

export default function Signature (props) {
    const name = 'Jeremy L Scott'
    return (
        <div className='sigCont'>
            <p className='sig'>Created by: {name}</p>
        </div>
    )
}