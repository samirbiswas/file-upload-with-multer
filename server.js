const express = require('express');
const path = require('path')
const app = express();

const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/media', express.static(path.join(__dirname, 'public')))

const route = require('./routers/images.routes');

app.use((req, res, next) => {
  req.imageDir = path.join(__dirname, "public");
  next();
});

app.use(route);
// global error handler
app.use(function (err, req, res, next) {
  res.status(500).send(err.message)
})
app.listen(PORT, () => {
  console.log(`server run of ${PORT}`);
})