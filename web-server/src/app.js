const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const request = require("request")
const getForcastReport = require('./utils/forcast')
const getGeoCode = require('./utils/utils')

const port = process.env.PORT || 3000
//console.log(__dirname)
const path1 = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)
console.log(viewPath)
//console.log(path1)

app.set('views',viewPath)
app.set('view engine','hbs')
app.use(express.static('web-server/public'))


app.get('/weather',(req,res)=>{
    if(!req.query.address){
     return   res.send({
            error:'Please provide the search!'
        })
    }
    else{

        getGeoCode(req.query.address,(error,{latitude,longitude,location}={})=>{
            if(error){
                return res.send({error})
            }
           getForcastReport(`${latitude},${longitude}`,(error,forCastData)=>{
               if(error){
                   return res.send({error})
               }
               res.send({
                   forcast : forCastData,
                   location : location,
                   address: req.query.address
               })
               
           })
        })
    //    res.send({
    //        forcast : 'Climate is pleasent',
    //        address : req.query.address
    //    })
    }
    
})

app.get('/help',(req,res)=>{
        res.render('help',{
            title: 'Help page',
            helpText:'this is some helpful text',
            name: 'Pandey'
        })
})

app.get('/',(req,res)=>{
    res.render('index',{
        title: 'Index Page',
        helpText:'this is some helpful text',
        name: 'Pandey'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About page',
        name : 'Golu'
    })
})

app.get('/products',(req,res)=>{
    console.log(req.query.search)
    if(!req.query.search){
      res.send({
        error: 'Please provide the correct search term!'
      })  
    }
    else{
        res.send({
            product:[]
        })
    }
   
  
})

// app.get('*',(req,res)=>{
//     res.send('my 404 page')
// })




app.listen(port,()=>{
    console.log('Server is running on port 3000')
})