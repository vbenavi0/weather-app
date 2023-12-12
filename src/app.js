const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views') //directory for hbs files
const partialPath = path.join(__dirname, '../templates/partials') //directory for partial files

app.set('view engine', 'hbs') //tells express to use our handlebar hbs files
app.set('views', viewPath) //tells express where views folder is
hbs.registerPartials(partialPath) //tells hbs where to find partials

app.use(express.static(publicPath))

app.get('', (req, res)=>{
    res.render('index',{ //render index view template 
        title: 'Weather App', 
        name: 'Victor'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About Me', 
        name: 'Victor'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        message: 'How can I help?',
        title: 'Help', 
        name: 'Victor'
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404',{
        message: 'Help Article not found',
        title: 'Help', 
        name: 'Victor'
    })
})

app.get('*', (req, res)=>{
    res.render('404',{
        message: 'Error 404, page not found',
        title: '404', 
        name: 'Victor'
    })
})

// app.get('/weather', (req, res)=>{
//     res.send({
//         Location: "Charlotte",
//         Forecast: 'Rainy'
//     })
//     res.end()
// })

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000.')
})