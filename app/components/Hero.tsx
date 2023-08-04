'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {

    const [images, setImages] = useState([])

    return ( 
        <div>
            <Carousel
            showArrows={true}
            showIndicators={false}
            infiniteLoop={true}
            dynamicHeight={true}
            autoPlay={true}
            emulateTouch={true}
            >
            {images.map((image) =>{
                return(
                    <Image src={image} alt='animal' width="100" height="100"/>
                )
            })}
            </Carousel>
        </div>
    );
}

export default Hero;