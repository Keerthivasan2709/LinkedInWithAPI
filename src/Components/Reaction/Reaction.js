import React from 'react'
import './Reaction.css'
function Reaction({ src, name, className }) {
    return (
        <div className={`${className} d-flex align-items-center button gap-2`}>
            <img src={src} />
            <div>{name}</div>
        </div>
    )
}

export default Reaction