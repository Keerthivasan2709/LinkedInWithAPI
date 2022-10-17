import React from 'react'

export function Collage1({ data }) {
    return (
        <img src={data} className="post w-100" />
    )
}

export function Collage2({ data }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr",alignItems:"center" }}>
            {
                data.map(data => {
                    return <img src={data} className="post w-100" style={{maxHeight:"800px"}} />
                })
            }
        </div>
    )
}

export function Collage3({ data }) {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr",alignItems:"center" }}>
                <img src={data[0]} className="post w-100" style={{maxHeight:"800px",objectFit:"contain"}} />
                <img src={data[1]} className="post w-100" style={{objectFit:"contain"}}/>
            </div>
            <img src={data[2]} className="post w-100" style={{maxHeight:"400px",objectFit:"cover"}}/>
        </div>
    )
}

export function Collage4({ data }) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {
                data.map(data => {
                    return <img src={data} className="post w-100" style={{objectFit:"contain"}}/>
                })
            }
        </div>
    )
}