const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const routes = require('./routes/route')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))


async function start() {
  try {
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()
