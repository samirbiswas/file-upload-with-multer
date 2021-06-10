const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, req.imageDir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  filefilter,
  limits: {
    fileSize: 100000
  }
})

module.exports = { upload }