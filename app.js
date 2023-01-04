//require packages used in the project
const express = require('express')
const app = express()
const port = 3000

//require express-handlebars here
const exphbs = require('express-handlebars')

//setting template engine
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//setting static file
app.use(express.static('public'))

//routes setting
app.get('/',(req,res) => {
  console.log('req', req)
  res.render(`index`)
})

app.get('/about', (req, res) => {
  console.log('req', req)
  res.render(`about`)
})
app.get('/portfolio', (req, res) => {
  console.log('req', req)
  res.render(`portfolio`)
})
app.get('/contact', (req, res) => {
  console.log('req', req)
  res.render(`contact`)
})




//start and listen on the Express server
app.listen(port,() => {
  console.log(`Express is listening on localhost:${port}`)
})