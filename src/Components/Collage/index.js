import React from 'react'

export function Collage1({ data }) {
    console.log(data)
    return (
        <>
            {data[0].postType == 'video' ? <video src={data[0].data} className="post w-100" style={{ objectFit: "contain" }} /> : data[0].ContentType = "image" ? <img src={data[0].data} className="post w-100" style={{ objectFit: "contain" }} /> : <></>}
        </>
    )
}

export function Collage2({ data }) {
    console.log(data)
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch", height: "60vh" }}>
            {
                data.map(data => {
                    return data.postType == 'image' ? <img src={data.data} className="post w-100" style={{ maxHeight: "600px", objectFit: "cover" }} /> : <video autoPlay muted src={data.data} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                })
            }
        </div>
    )
}

export function Collage3({ data }) {
    console.log(data)
    return (
        <div className='d-flex flex-column justify-content-between' style={{ height: "100%" }}>
            {data[0].postType == 'image' ? <img src={data[0].data} className="post w-100" style={{ height: "50%", objectFit: "cover" }} /> : <video autoPlay muted src={data[0].data} style={{ objectFit: "cover", width: "100%", height: "50%" }} />}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch", height: "50%", overflow: "hidden" }}>
                {data[2].postType == 'image' ? <img src={data[2].data} className="post w-100" style={{ objectFit: "cover" }} /> : <video autoPlay muted src={data[2].data} style={{ objectFit: "cover", width: "100%", height: "100%" }} />}
                {data[1].postType == 'image' ? <img src={data[1].data} className="post w-100" style={{ objectFit: "cover" }} /> : <video autoPlay muted src={data[1].data} style={{ objectFit: "cover", width: "100%", height: "100%" }} />}
            </div>
        </div>
    )
}
