const request = require("request")


const getForcastReport =(cordinate,callback)=>{
   
    const url = 'http://api.weatherstack.com/current?access_key=ad4e28d0c17c064961744033800d9b00&query= '+ cordinate+'&units=m'
    
    request({url:url,json:true},(error,response)=>{
        if(error){

            callback('Unable to connect with server',undefined)
         }
         else if (response.body.current.temperature ===0) {
             callback('Unable to connect with server',undefined)
         }
         else{
               callback(undefined , {
               temprature: response.body.current.temperature
               })
          }
        
    })
}

module.exports = getForcastReport