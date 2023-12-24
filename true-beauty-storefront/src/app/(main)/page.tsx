import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Slider from "@modules/home/components/slider"
import NewArrivals from "@modules/home/components/new-arrivals"
import SectionGallery from "@modules/home/components/section-gallery"
import Banner from "@modules/home/components/banner"
import Testimonials from "@modules/home/components/testimonials"
import TextWithIcons from "@modules/home/components/text-with-icons"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Slider />
      <NewArrivals />
      <FeaturedProducts />
      <SectionGallery />
      <Banner />
      <Testimonials />
      <TextWithIcons />
    </>
  )
}

export default Home
