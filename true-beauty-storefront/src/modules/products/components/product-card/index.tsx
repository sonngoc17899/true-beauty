import Link from "next/link"
import Image from "next/image"
import Thumbnail from "@modules/products/components/thumbnail"
import clsx from "clsx"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <figure className="product-featured-image thb-hover">
        <Link>
          <Thumbnail thumbnail={product.thumbnail} size="full" />
        </Link>
        <div className="product-card__info">
          <div className="product-card-vendor">{product.vendor}</div>
          <Link className="product-card-title">{product.title}</Link>
          {product.price ? (
            <>
              {product.price.price_type === "sale" && (
                <span className="line-through text-gray-500">
                  {product.price.original_price}
                </span>
              )}
              <span
                className={clsx("font-semibold", {
                  "text-rose-500": product.price.price_type === "sale",
                })}
              >
                {product.price.calculated_price}
              </span>
            </>
          ) : (
            <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
          )}
        </div>
      </figure>
    </div>
  )
}

export default ProductCard
