const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const blogRouter = require('./src/routers/blog_router')

app.use(express.static('public'))
app.use(expressLayouts)
app.set('view engine', 'ejs') //view engine olarak ejs kullanicaz 
app.set('views', path.resolve(__dirname, './src/views')) //src nin altinda oldugu icin view yolunu belirttik 


app.use('/', blogRouter)
app.use('/blog', blogRouter)










app.listen(3000, ()=> {
    console.log('3 2 1 Ucusa Hazir Hacking Basladi');
})