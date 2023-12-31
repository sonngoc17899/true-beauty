"use client"
import React, { useEffect, useRef } from "react"
import Flickity from "react-flickity-component"
import Image from "next/image"
import Link from "next/link"
import VideoPlayer from "../../../../share-component/VideoPlay"
import SlideImage from "../../../../styles/image/slideshow-image.jpg"
import SlideImage1 from "../../../../styles/image/slideshow-image1.jpg"

const Slider = () => {
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: 2,
    fullscreen: true,
    setGallerySize: false,
    prevNextButtons: false,
    autoPlay: false,
    fade: false,
  }
  const carouselRef = useRef(null)
  const slide = {
    name: "Slider",
    items: [
      {
        heading: "LOVED FOR STYLE",
        description: "It's hard to be nice if you don't feel comfortable",
        sub_heading: "EXPRESS YOURSELF",
        image: SlideImage1,
        type: "video",
        button: {
          primary: {
            title: "Shop Dresses",
            url: "/collections/all",
          },
          secondary: {
            title: "",
            url: "",
          },
        },
      },
      {
        heading: "LOVED FOR STYLE",
        description: "It's hard to be nice if you don't feel comfortable",
        sub_heading: "EXPRESS YOURSELF",
        image: SlideImage,
        type: "image",
        button: {
          primary: {
            title: "Shop Sale",
            url: "/collections/all",
          },
          secondary: {
            title: "",
            url: "",
          },
        },
      },
    ],
  }

  return (
    <Flickity
      ref={carouselRef}
      className="carousel carousel-home h-screen" // default ''
      elementType="div" // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {slide.items.map((item, index) => (
        <div className="carousel__cell w-full h-screen relative" key={index}>
          {item.type === "video" ? (
            <VideoPlayer className="w-full" />
          ) : (
            <Image
              priority={index <= 2}
              src={item.image}
              fill
              className="object-center object-cover h-full"
              alt="slide-image"
            />
          )}

          <div className="carousel__bg-overlay absolute top-0 left-0 w-full h-full z-10"></div>
          <div className="carousel__inner top-0 left-0 w-full h-full absolute flex justify-center items-center z-20">
            <div className="carousel__content py-16 px-14 text-white text-center">
              <p className="sub-heading mb-5 font-medium text-sm">
                {item.sub_heading}
              </p>
              <h1 className="heading font-semibold text-6xl mb-4">
                {/*{item.heading.split(" ").map((item, index) => (
                  <div key={index} className="item">
                    {item}
                  </div>
                ))}*/}
                {item.heading}
              </h1>
              <p className="description mb-5">
                {/*{item.description.split(" ").map((item, index) => (
                  <div key={index} className="item">
                    {item}
                  </div>
                ))}*/}
                {item.description}
              </p>
              {item.button.primary.title && (
                <div className="button-overflow-hidden btn text-sm">
                  <Link
                    href={item.button.primary.url}
                    className="inline-flex justify-center items-center w-fit py-1 px-3 border border-white h-12 carousel__link"
                    passHref
                  >
                    <span>{item.button.primary.title}</span>
                  </Link>
                </div>
              )}
              {item.button.secondary.title && (
                <Link
                  href={item.button.secondary.url}
                  passHref
                  className="relative text-sm button-overflow-hidden btn carousel__link"
                >
                  <span>{item.button.secondary.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </Flickity>
  )
}

export default Slider
