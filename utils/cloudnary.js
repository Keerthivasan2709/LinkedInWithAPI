const cloudinary  = require('cloudinary').v2
  

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET_KEY,
})

exports.uploads = async (file)=>cloudinary.uploader.upload(file);
            
        
