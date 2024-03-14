const express = require('express');

const app = express();
const port = 8080;


const logger = (req, res, next) => {
  console.log(`[${new Date().toDateString()}] ${req.method} ${req.url}`);
  next();
};


app.use(logger);


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});