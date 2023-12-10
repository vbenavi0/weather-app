const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const place = process.argv[2]

if(place){
    geocode(place, (error, {location, latitude, longitude} = {})=>{
        if(error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
else{
    console.log('Please enter a place to forecast')
}