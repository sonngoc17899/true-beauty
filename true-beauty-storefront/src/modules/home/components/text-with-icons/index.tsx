import Image from "next/image"
import Box from "../../../../styles/image/icons8-gift-50.png"
import Call from "../../../../styles/image/icons8-call-80.png"
import Survey from "../../../../styles/image/icons8-return-50.png"
import Gift from "../../../../styles/image/icons8-medal-50.png"

const TextWithIcons = () => {
  const data = [
    {
      icon: Call,
      title: "Customer Support",
      description: "Mon - Sat, 10am - 9pm",
    },
    {
      icon: Box,
      title: "Easy Returns",
      description: "Returns extended to 60 days",
    },
    {
      icon: Survey,
      title: "Gift Package",
      description: "Free packaging over $100",
    },
    {
      icon: Gift,
      title: "One-year Warranty",
      description: "No questions asked",
    },
  ]
  return (
    <div className="text-with-icons">
      <div className="content-container p-6 small:px-8 border-t-1 border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div className="flex gap-8 lg:gap-5 items-center" key={index}>
              <div className="w-[64px] h-[64px] flex items-center justify-center border-1 rounded-full border-gray-200">
                <Image
                  src={item.icon}
                  alt="icon"
                  width="32"
                  height="32"
                  className="object-contain object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TextWithIcons
