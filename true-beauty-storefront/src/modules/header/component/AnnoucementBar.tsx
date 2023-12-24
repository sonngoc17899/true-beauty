"use client"
import Delivery from "@modules/common/icons/delivery"
import Extended from "@modules/common/icons/extended"
import Clothing from "@modules/common/icons/clothing"
import LifeTime from "@modules/common/icons/life-time"

const AnnoucementBar = () => {
  const data = {
    name: "Announcement Bar",
    blocks: [
      {
        sub_items: [
          {
            title: "FREE DELIVERY AND RETURNS FROM $30",
            icon: "delivery",
          },
          {
            title: "10% OFF ON ALL CLOTHING",
            icon: "clothing",
          },
          {
            title: "RETURNS EXTENDED TO 60 DAYS",
            icon: "extended",
          },
          {
            title: "LIFE-TIME GUARANTEE",
            icon: "life_time",
          },
        ],
      },
      {
        sub_items: [
          {
            title: "FREE DELIVERY AND RETURNS FROM $30",
            icon: "delivery",
          },
          {
            title: "10% OFF ON ALL CLOTHING",
            icon: "clothing",
          },
          {
            title: "RETURNS EXTENDED TO 60 DAYS",
            icon: "extended",
          },
          {
            title: "LIFE-TIME GUARANTEE",
            icon: "life_time",
          },
        ],
      },
      {
        sub_items: [
          {
            title: "FREE DELIVERY AND RETURNS FROM $30",
            icon: "delivery",
          },
          {
            title: "10% OFF ON ALL CLOTHING",
            icon: "clothing",
          },
          {
            title: "RETURNS EXTENDED TO 60 DAYS",
            icon: "extended",
          },
          {
            title: "LIFE-TIME GUARANTEE",
            icon: "life_time",
          },
        ],
      },
    ],
  }

  return (
    <div className="announcement-bar relative">
      <div className="announcement-bar--inner direction-left announcement-bar--marquee">
        {data.blocks.map((item, index) => (
          <div key={index}>
            {item.sub_items.map((subItem) => (
              <div key={subItem.icon} className="announcement-bar--item">
                {subItem.icon === "delivery" ? <Delivery /> : ""}
                {subItem.icon === "extended" ? <Extended /> : ""}
                {subItem.icon === "clothing" ? <Clothing /> : ""}
                {subItem.icon === "life_time" ? <LifeTime /> : ""}
                {subItem.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnnoucementBar
