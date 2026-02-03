const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // needed for next export / static hosting
  },
};
