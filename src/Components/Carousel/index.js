import React, { useState } from 'react'
import './index.css'
import BtnSlider from './BtnSlider'

function Carousel({ dataSlider }) {
    console.log(dataSlider)
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
            <div className="container-slider w-100" style={{ height: "100%" }}>
                {dataSlider.map((obj, index) => {
                    return (
                        <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            {
                                obj.type ==="image" ?
                                    <img src={obj.data} alt="post" style={{ objectFit: "contain" }} /> :
                                    <video src={obj.data} style={{objectFit:"contain",height:"100%"}} controls autoPlay muted/>

                            }
                        </div>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </div>
        </>
    )
}

export default Carousel;