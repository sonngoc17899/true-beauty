"use client"
import { Image as MedusaImage } from "@medusajs/medusa"
import Flickity from "react-flickity-component"
import Image from "next/image"
import { useRef } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: 2,
    fullscreen: true,
    setGallerySize: false,
    prevNextButtons: true,
    pageDots: false,
  }

  const carouselRef = useRef(null)

  /*const handleScrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
        }
      }*/

  const handleChangeCarousel = (index) => {
    console.log("carouselRef", carouselRef)
    if (carouselRef.current) {
      console.log("carouselRef.current", carouselRef.current)
      carouselRef.current.flkty.select(index)
    }
  }

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              className="h-14 w-12 relative border border-white"
              onClick={() => {
                handleChangeCarousel(index)
              }}
            >
              <span className="sr-only">Go to image {index + 1}</span>
              <Image
                src={image.url}
                className="absolute inset-0"
                alt="Thumbnail"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </button>
          )
        })}
      </div>
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        <Flickity
          ref={carouselRef}
          className="carousel h-screen" // default ''
          elementType="div" // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {images.map((image, index) => {
            return (
              <div
                ref={(image) => imageRefs.current.push(image)}
                key={image.id}
                className="relative aspect-[29/34] w-full"
                id={image.id}
              >
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0"
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            )
          })}
        </Flickity>
      </div>
    </div>
  )
}

export default ImageGallery
