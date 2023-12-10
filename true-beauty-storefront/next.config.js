const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const path = require('path')

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "medusa-server-testing.s3.amazonaws.com",
    ],
  },
  /*sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },*/
})


console.log("next.config.js", JSON.stringify(module.exports, null, 2))
