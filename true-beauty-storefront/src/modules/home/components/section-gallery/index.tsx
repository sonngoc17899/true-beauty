"use client"
import { Image as MedusaImage } from "@medusajs/medusa/dist/models/image"
import Image from "next/image"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"
import Gallery from "../../../../styles/image/gallery.png"
import Gallery1 from "../../../../styles/image/gallery1.png"

type ImageGalleryProps = {
  images: MedusaImage[]
}
const SectionGallery = () => {
  const images = [
    {
      image: Gallery,
      title: "BUY NOW OR CRY LATER",
      description: "These stocks won't last forever.\n" + "\n",
      btn_content: "Explore",
      url: "/collections/all",
    },
    {
      image: Gallery1,
      title: "BE FREE. BE BEAUTIFUL.",
      description: "Express your wild side with these shirts.",
      btn_content: "Explore",
      url: "/collections/all",
    },
  ]
  return (
    <div className="section-gallery relative">
      <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gallery__inner">
          {images.map((item, index) => (
            <div
              className="gallery__item relative aspect-[29/34] w-full"
              key={index}
            >
              <Image
                src={item.image || ""}
                priority={index <= 2}
                className="absolute inset-0"
                alt={`Collection image ${index + 1}`}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="absolute text-white flex items-end w-full h-full p-11 gallery__content">
                <div className="z-10">
                  <h4 className="text-3xl font-semibold">{item.title}</h4>
                  <p className="mb-8 text-xs">{item.description}</p>
                  <Link href="" className="relative section-gallery__link">
                    <span>{item.btn_content}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionGallery
