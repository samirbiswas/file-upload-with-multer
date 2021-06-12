// single image controller
exports.singleUploadImage = (req, res) => {
  try {
    //const { name } = req.body;
    return res.json({
      message: 'Image uploaded successfully',
      image: req.file,

    })
  } catch (error) {
    return res.json({
      error: error.message
    })
  }
}
// multiple image controller
exports.multipleUploadImage = (req, res) => {
  try {

    //const { name } = req.body;
    return res.json({
      message: 'Images uploaded successfully',
      image: req.file,

    })
  } catch (error) {
    return res.json({
      error: error.message
    })
  }
}


