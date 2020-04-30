const request = require('request')
const chalk = require('chalk');
const getGeoCode = require('./utils')
const getForcastReport = require('./forcast')

getGeoCode(process.argv[2],(error,data)=> {
    console.log('Error', error)
    console.log('Data',data)
    getForcastReport(`${data.latitude},${data.longitude}`,(error,response)=>{
       if(error){
           console.error(error);
           
       } 
       console.log(response)
    })
})


