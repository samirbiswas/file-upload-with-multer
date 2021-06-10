const router = require('express').Router();

const { upload } = require('../middleware/imageUpload')
const imageController = require('../controllers/imagePostController')


router.post('/image', upload.single('image'), imageController.uploadImage);

module.exports = router