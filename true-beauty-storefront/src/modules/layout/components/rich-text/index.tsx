import Link from "next/link"

const RichText = ({ settings }) => {
  return (
    <div className="rich-text">
      <div className="text-center rich-text__inner">
        <h3 className="text-3xl mb-4">{settings.title}</h3>
        <div className="mb-8 rich-text__desciption">
          <p className="text-xl">{settings.description}</p>
        </div>
        <Link href={settings.url} className="rich-text__link">
          <span>{settings.btn_content}</span>
        </Link>
      </div>
    </div>
  )
}

export default RichText
