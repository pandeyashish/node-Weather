
const request = require('request')
const getGeoCode = (address,callback)=>{

    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXNoaXNoY3NlIiwiYSI6ImNrOTc1ZXJjMjB6eDczZnJ1MW12aXRiYnMifQ.FdztwgLmdXEq_yHLq9Se4A'
    request({url:geoCodeUrl,json:true},(error,response)=>{
        
            if(error){

               callback('Unable to connect with server',undefined)
            }
            else if (response.body.features.length ===0) {
                callback('Unable to connect with server',undefined)
            }
            else{
                callback(undefined,{
                    latitude : response.body.features[0].center[1],
                    longitude : response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                })
            }
    })
}

module.exports = getGeoCode