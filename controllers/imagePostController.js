

exports.uploadImage = (req, res) => {
  try {
    const { name } = req.body;
    return res.json({
      message: 'image uploaded successfully',
      image: req.file,
      name
    })
  } catch (error) {
    console.log(error);
  }
}


