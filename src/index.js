const path = require('path');
const express = require('express');
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3000;


//http logger
app.use(morgan('combined'))

// templet engine
app.engine('hbs', exphbs(
  { extname: '.hbs' }
));
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'resources\\views'));


app.get('/', (req, res) => {
  res.send('khjg')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})