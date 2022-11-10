const multer  = require('multer') ;

//adding location to store the file 
const storage  = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./upload')
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString()+"-"+file.originalname)
    }
})

//adding the file filter 

const fileFilter  = (req,file,cb) =>{
    // to chech the file type 'file.mimetype' 
    if(true) cb(null,true);
    else cb({message:"invalid file type"})
}

const upload = multer({
    storage,
    limits:{fileSize:1024*1024},
    fileFilter
})

module.exports = upload