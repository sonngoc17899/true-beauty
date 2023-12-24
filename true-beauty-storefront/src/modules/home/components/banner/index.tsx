import Image from "next/image"
import BannerImage from "../../../../styles/image/banner.png"
import Link from "next/link"

const Banner = () => {
  const data = {
    heading: "CHOOSE THE OUTFIT",
    description:
      "Pair text with an image to focus on your chosen product, collection, or blog post. Add\n" +
      "details on availability, style, or even provide a review.",
    sub_heading: "SPRING COLLECTION",
    btn_content: "Shop now",
    img: BannerImage,
    url: "",
  }
  return (
    <div className="banner">
      <div className="my-16 lg:my-32 h-[500px] lg:h-[550px] relative">
        <div className="banner__image-overlay relative h-full w-full relative flex items-center justify-center">
          <Image
            src={data.img}
            alt="banner"
            className="h-full object-cover absolute"
          />
          <div className="banner__content text-white text-center relative p-8 lg:p-0 lg:max-w-[650px]">
            <p className="subheading text-xs mb-6 opacity-60 ">
              {data.sub_heading}
            </p>
            <h3 className="heading text-4xl font-semibold mb-6">
              {data.heading}
            </h3>
            <p className="description mb-6">{data.description}</p>
            <Link href={data.url} className="uppercase relative banner__link">
              <span>{data.btn_content}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
