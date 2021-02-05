const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 3000;
const route = require('./routes/index')
app.use(morgan('combined'))

const db = require('./config/db/index');
// connet
db.connect();

route(app);

// body passer
app.use(express.urlencoded(
  { extended:true }
));
app.use(express.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})