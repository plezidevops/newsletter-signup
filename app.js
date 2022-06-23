const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Newsletter Sign-up');
});

app.listen(port, () => console.log(`Server started on port ${port}.`));