'use client'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Responsive.module.css";
import Image from "next/image";
import {Resources} from '../../public/images/Images.json'
import Container from "./Container";

    export default function ResponsiveCarousel() {
        // const test = ["https://hips.hearstapps.com/hmg-prod/images/gettyimages-639708906-612x612-1674417231.jpg", "https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"]
        // console.log(Resources)
      
      return (
    
                <Carousel
                    
                    showArrows={true}
                    showIndicators={false}
                    infiniteLoop={true}
                    dynamicHeight={true}
                    autoPlay={true}
                    emulateTouch={true}
                    
                    >
                    {Resources.map((image) =>{
                        return(
                            <Image unoptimized key={image.asset_id} src={image.url} alt='animal' width="100" height="100"/>
                            )
                        })}

                </Carousel>
        
      );
    }