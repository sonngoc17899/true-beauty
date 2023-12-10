import MenuItem from "./menu-item";

const DropdownMenu = () => {
  const menu = {
    "name": "Menu",
    "items": [
      {
        "title": "HOME",
        "dropdown": false,
        "url": "/"
      },
      {
        "title": "SHOP",
        "dropdown": true,
        "url": "/collections/all"
      },
      {
        "title": "JOURNAL",
        "dropdown": false,
        "url": "/blogs/news"
      },
      {
        "title": "OUR STORY",
        "dropdown": false,
        "url": "/pages/about-us"
      },
      {
        "title": "F.A.Q.",
        "dropdown": false,
        "url": "/pages/faq"
      },
      {
        "title": ".CONTACT",
        "dropdown": false,
        "url": "/pages/contact"
      }
    ]
  }

  return (
      <ul className="menu h-full">
        {menu.items.map((item, index) => (
            <MenuItem key={index} settings={item}/>
        ))}
      </ul>
  )
}

export default DropdownMenu
