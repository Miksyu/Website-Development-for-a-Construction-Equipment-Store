const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
  try {
    await mongoose.connect('mongodb+srv://oxana:asdxcv13@cluster0.uvpjb.mongodb.net/technomart', {
      // useCreatendex: true,
      // useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, err => {
      if(err)
        throw err;
      console.log('Test connection')
    })
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}
 start()
