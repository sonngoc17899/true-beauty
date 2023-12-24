"use client"
import React, { useEffect, useRef } from "react"
import { Video, CloudinaryContext } from "cloudinary-react"
import { useInView } from "react-intersection-observer"

// eslint-disable-next-line react/display-name
const VidPlayer = React.memo(({ videoRef }) => {
  return (
    <CloudinaryContext cloud_name="dbsgdoozw" className="h-full w-full">
      <Video
        className="h-full w-full object-cover object-center"
        publicId="6a796bc70db04bc3bb6a9fea0c9596d4.HD-1080p-4.8Mbps-16439256_xin4m7"
        width="100%"
        controls={false}
        loop
        auto-play
        muted
        innerRef={videoRef}
        allow="autoplay; fullscreen"
      />
    </CloudinaryContext>
  )
})

const VideoPlayer = () => {
  const videoRef = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    console.log("inView", inView)
    if (videoRef.current) {
      console.log(videoRef.current.play())
      videoRef.current.play()
    }
  })

  // @ts-ignore
  return (
    <div ref={ref} className="h-full w-full">
      <VidPlayer videoRef={videoRef} />
    </div>
  )
}

export default VideoPlayer
