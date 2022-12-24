const multer = require('multer');
const myStorage = multer.diskStorage({
    destination: (req,file,next)=>{
        let path = "public/images/";
        next(null,path);
    },filename: (req,file,next)=>{
        let file_name = Date.now()+"-"+file.originalname;
        next(null,file_name)
    }
});
const imageFilter = (req,file,next)=>{
    let allowed = ['jpeg','jpg','png','bmp','svg','webp','gif','application/octate-stream'];
    let fileparts = file.originalname.split('.');
    let ext = fileparts.pop();
    if(allowed.includes(ext.toLowerCase())){
        next(null,true)
    }else{
        next({err:400,msg:'image file format not supported'},null)
    }
}
const uploader = multer({
    storage: myStorage,
    fileFilter: imageFilter,
    limits:{
        fileSize : 5000000
    }
});


module.exports = uploader;