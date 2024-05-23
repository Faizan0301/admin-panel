const express=require('express')

const userAuth = require('./middliwares/user-autho')

const port=8081

const app=express()

app.set("view engine","ejs")

app.use(express.static('public'))

// app.use(userAuth)

app.get('/',(req,res)=>{return res.render("index")})

app.get('/dashbord-2',(req,res)=>{return res.render("index2")})

app.get('/authentication-login',(req,res)=>{return res.render("authentication-login")})

app.get('/authentication-register',(req,res)=>{return res.render("authentication-register")})

app.get('/charts',(req,res)=>{return res.render("charts")})

app.get('/error-403',(req,res)=>{return res.render("error-403")})

app.get('/error-404',(req,res)=>{return res.render("error-404")})

app.get('/error-405',(req,res)=>{return res.render("error-405")})

app.get('/error-500',(req,res)=>{return res.render("error-500")})

app.get('/form-basic',(req,res)=>{return res.render("form-basic")})

app.get('/form-wizard',(req,res)=>{return res.render("form-wizard")})

app.get('/grid',(req,res)=>{return res.render("grid")})

app.get('/icon-fontawesome',(req,res)=>{return res.render("icon-fontawesome")})

app.get('/icon-material',(req,res)=>{return res.render("icon-material")})

app.get('/pages-buttons',(req,res)=>{return res.render("pages-buttons")})

app.get('/pages-calendar',(req,res)=>{return res.render("pages-calendar")})

app.get('/pages-chat',(req,res)=>{return res.render("pages-chat")})

app.get('/pages-elements',(req,res)=>{return res.render("pages-elements")})

app.get('/pages-gallery',(req,res)=>{return res.render("pages-gallery")})

app.get('/pages-invoice',(req,res)=>{return res.render("pages-invoice")})

app.get('/tables',(req,res)=>{return res.render("tables")})

app.get('/widgets',(req,res)=>{return res.render("widgets")})


app.listen(port,(err)=>{
    if(err){
        console.log('server not start in port');
        return false
    }
    console.log('server satrt. http://localhost:'+port);
})