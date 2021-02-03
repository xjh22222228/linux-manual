var express = require('express')
var app = express();
var formidable = require('formidable');
var fs = require('fs')
var path = require('path')
var crypto = require('crypto')
var md5 = str => {
    return crypto.createHash('md5').update(str.toString()).digest('hex')
}



app.use((req, res, next) => {
    // 设置跨域头
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Content-Type,xfilecategory,xfilename,xfilesize,errorAlert,Range',
        'Access-Control-Expose-Headers': 'Accept-Ranges, Content-Encoding, Content-Length, Content-Range',
    })
    next();
})

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index')
})


app.post('/time', (req, res) => {
    res.json({
        success: true
    });
})

// 这个才是主要的
app.post('/upload', (req, res) => {
    var form = new formidable.IncomingForm();
    form.uploadDir = './upload';
    form.parse(req, function (err, fields, files) {
        var suffix = {
            'image/jpeg': '.jpg',
            'image/png': '.png',
        }
        fs.renameSync(files.file.path, `./upload/${md5(Date.now())}${suffix[files.file.type]}`)
        res.json({
            files
        })
    });
})

app.listen(3001)


