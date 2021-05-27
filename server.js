const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    path = require('path'),
    PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/sitemap',(req,res) =>{
    res.sendFile(path.join(__dirname, '/sitemap.xml'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})