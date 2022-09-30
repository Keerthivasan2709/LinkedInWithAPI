import React from 'react'
import './Dropdown.css'
function Dropdown({ name, list, handleForm }) {
    return (
        <div className='border rounded-5'>

            <select onChange={handleForm} name={name} className="inputBox noBorder">
                {
                    list.map((data) => {
                        return (
                            <option key={data}>{data}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown