"use client"
import React, { useEffect, useRef } from 'react';
import Flickity from 'react-flickity-component'
import Image from "next/image";
import Link from "next/link"
import SlideImage from '../../../../styles/image/slideshow-image.jpg'

const Slider = () => {
    const flickityOptions = {
        initialIndex: 0,
        lazyLoad: 2,
        fullscreen: true,
        setGallerySize: false,
        prevNextButtons: true,
    }
    const carouselRef = useRef(null);
    const slide = {
        "name": "Slider",
        "items": [
            {
                "heading": "LOVED FOR STYLE",
                "description": "It's hard to be nice if you don't feel comfortable",
                "sub_heading": "EXPRESS YOURSELF",
                "image": SlideImage,
                "button": {
                    "primary": {
                        "title": "SHOP COLLECTION",
                        "url": "/collections/all"
                    },
                    "secondary": {
                        "title": "",
                        "url": ""
                    }
                }
            },
            {
                "heading": "LOVED FOR STYLE",
                "description": "It's hard to be nice if you don't feel comfortable",
                "sub_heading": "EXPRESS YOURSELF",
                "image": SlideImage,
                "button": {
                    "primary": {
                        "title": "SHOP COLLECTION",
                        "url": "/collections/all"
                    },
                    "secondary": {
                        "title": "",
                        "url": ""
                    }
                }
            }
        ]
    }

    return (
        <Flickity
            ref={carouselRef}
            className="carousel h-screen" // default ''
            elementType="div" // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            {slide.items.map((item, index) => (
                <div className="carousel__cell h-full relative" key={index}>
                    <Image src={item.image} className="object-center object-cover h-full"/>
                    <div className="carousel__bg-overlay absolute top-0 left-0 w-full h-full z-10"></div>
                    <div className="carousel__inner top-0 left-0 w-full h-full absolute flex justify-center items-center z-20">
                        <div className="carousel__content py-16 px-14 text-white text-center">
                            <p className="sub-heading mb-5 font-medium text-sm">{item.sub_heading}</p>
                            <h1 className="heading font-semibold text-6xl mb-4">{item.heading}</h1>
                            <p className="description mb-5">{item.description}</p>
                            {item.button.primary && (
                                <div className="button-overflow-hidden text-sm">
                                    <Link href={item.button.primary.url} className="inline-flex justify-center items-center w-fit py-1 px-3 border border-white h-12" passHref>
                                        <span>{item.button.primary.title}</span>
                                    </Link>
                                </div>)}
                            {item.button.secondary &&
                                (<div className="button-overflow-hidden text-sm">
                                    <Link href={item.button.secondary.url} passHref>
                                        <span>{item.button.secondary.title}</span>
                                    </Link>
                                </div>)}
                        </div>
                    </div>
                </div>
            ))}

        </Flickity>

    )
}

export default Slider;