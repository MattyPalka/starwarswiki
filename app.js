//This is a server file

const express = require('express')
const helmet = require('helmet')
const path = require('path')


const app = express()


app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(3000)