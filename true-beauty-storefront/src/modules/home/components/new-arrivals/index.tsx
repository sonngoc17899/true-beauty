"use client"
import React, { useRef } from "react"
import Link from "next/link"
import ProductPreview from "@modules/products/components/product-preview"
import Flickity from "react-flickity-component"
import repeat from "@lib/util/repeat"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"

const NewArrivals = () => {
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: 0,
    fullscreen: true,
    setGallerySize: false,
    prevNextButtons: true,
    contain: true,
    groupCells: true,
  }
  const newArrivalsRef = useRef(null)
  const { data: products, isLoading: loadingProducts } =
    useFeaturedProductsQuery()

  return (
    <div className="arrivals">
      <h1>NEW ARRIVALS</h1>
      <h3>Discover the latest ready-to-wear dresses.</h3>
      <div className="flex justify-between">
        <div className="flex arrivals__tab">
          <button>DRESSES</button>
          <span>/</span>
          <button>BOTTOMS</button>
        </div>
        <div className="arrivals__button">
          <Link href="/collections/dresses" />
          <Link href="/collections/Shop Bottoms" />
        </div>
      </div>
      <Flickity
        ref={newArrivalsRef}
        className="carousel h-screen" // default ''
        elementType="div" // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {products?.slice(0, 8).map((product) => (
          <div className="w-1/2 md:1/3 lg:w-1/4 px-3 lg:px-4" key={product.id}>
            <ProductPreview {...product} />
          </div>
        ))}
        {/*{loadingProducts &&
          repeat(8).map((index) => (
            <div className="w-1/2 lg:w-1/3" key={index}>
              <SkeletonProductPreview />
            </div>
          ))}*/}
      </Flickity>
    </div>
  )
}

export default NewArrivals