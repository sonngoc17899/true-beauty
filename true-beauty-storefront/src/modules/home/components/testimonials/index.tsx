"use client"
import Flickity from "react-flickity-component"

const Testimonials = () => {
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: 2,
    fullscreen: true,
    setGallerySize: true,
    prevNextButtons: false,
    pageDots: false,
    pauseAutoPlayOnHover: true,
    autoPlay: 2000,
  }

  const data = [
    {
      content:
        "“Think big and start small. Ignore the naysayers and don’t ever settle at any level.”",
    },
    {
      content:
        "“The dress must follow the body of a woman, not the body following the shape of the dress.”",
    },
    {
      content:
        "“Fashion is what you're offered four times a year by designers. And style is what you choose.”",
    },
  ]
  return (
    <div className="testimonials">
      <div className="testimonials__inner content-container my-16 px-6 small:px-8 small:my-32">
        <div className="title uppercase text-xs text-center mb-4">
          IN THE PRESS
        </div>
        <div className="testimonials__slide">
          <Flickity
            className="carousel" // default ''
            elementType="div" // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {data.map((item, index) => (
              <div key={index} className="w-full flex justify-center text-3xl">
                <p className="w-[800px] text-center">{item.content}</p>
              </div>
            ))}
          </Flickity>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
