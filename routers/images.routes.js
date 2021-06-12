const router = require('express').Router();

const { upload } = require('../middleware/imageUpload')
const imageController = require('../controllers/imagePostController');


// single image upload route
router.post('/image', upload.single('image'), imageController.singleUploadImage);
// multiple image upload route
router.post('/images', upload.array('images', 2), imageController.multipleUploadImage);

module.exports = router