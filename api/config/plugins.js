module.exports = ({ env }) => ({
  upload: {
    provider: env('CLOUDINARY_PROVIDER'),
    providerOptions: {
      cloud_name: env('CLOUDINARY_CLOUD_NAME'),
      api_key: env('CLOUDINARY_API_KEY'),
      api_secret: env('CLOUDINARY_API_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    }
  }
})