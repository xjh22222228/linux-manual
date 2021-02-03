var express = require('express')
var bodyParser = require('body-parser')
var axios = require('axios')
var fs = require('fs')
var mongoose = require('mongoose')
var querystring = require('querystring')
var url = require('url')
var cookieParser = require('cookie-parser')
var EventEmitter = require('events').EventEmitter;
var path    = require('path')
var session = require('express-session')


var app = express()
var router = express.Router()
var events = new EventEmitter();
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test', {useMongoClient: true});



// 中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('hello'))
app.use(session({
	'secret': ' ', 
	saveUninitialized: true,   
	resave: false,
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '/public')))




router.route('/')
.get((req, res, next) => {
	res.render('index', {
		i: 3333333
	})
})


router.post('/api',(req, res) => {
	console.log(req.body.username);
	
	if( req.body.username ) {
		res.json({
			success: true
		})
		return;
	}
	res.json({
		success: false
	})
})






app.use('/', router)

app.listen(8083)
