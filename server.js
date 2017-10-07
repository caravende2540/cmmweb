const express = require('express') //ตัวแปร 
const app = express() // function 
const { twig } = require('twig')
const homeController = require('./controllers/home.controller')
const newController = require('./controllers/news.controller')

app.set('view engine', 'twig')

// app.get('/', function(req, res)  
// {
// 	res.send('hello is me')
// })

// app.get('/home',function(req, res){
// 	res.send('home')
// })
app.get('/', homeController.index)
app.get('/news', newController.index)

app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000
}))

app.listen(8000, function(err) {
	console.log('Server is running on port 8000')
})