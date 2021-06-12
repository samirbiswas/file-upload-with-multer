
const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, req.imageDir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
function checkFileType(file, cb) {
  // Allowed extention
  const filetypes = /jpeg|jpg|png/;
  // Check extention
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }

};

const fileFilter = (_req, file, cb) => {
  checkFileType(file, cb);
}

const upload = multer({
  storage,
  limits: {
    fileSize: 100000000
  },
  fileFilter
})

module.exports = { upload }