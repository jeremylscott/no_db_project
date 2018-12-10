import React from 'react'
import './App.css';

export default function Signature (props) {
    const name = 'Jeremy L Scott'
    return (
        <div>
            <p className='sig'>Created by: {name}</p>
        </div>
    )
}