import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import VideoPlayer from "../../../../share-component/VideoPlay"
import {Cloudinary} from "@cloudinary/url-gen";

const Hero = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dbsgdoozw'}});
  /*const bannerVideo = cld.video('xwq49vim4eakx6lqamg0');*/

  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Introducing the Latest Summer Styles
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This season, our new summer collection embraces designs to provide
          comfort and style - ensuring you&apos;re well-prepared for whatever
          comes your way.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
        <VideoPlayer/>
    </div>
  )
}

export default Hero
