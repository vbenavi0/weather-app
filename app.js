const request  = require('request')
const geocode = require('./utils/geocode')

// const url =  'http://api.weatherstack.com/current?access_key=a6b280d43a5d2ef21fcb9e608b1d1800&query=37.8267,-122.4233&units=f'

// request({url:url, json:true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. There is a '+response.body.current.precip+'% chance of rain')
//     }
// })

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los$20Angeles.json?access_token=pk.eyJ1IjoidmJlbmF2aTAiLCJhIjoiY2xwc3RmcG9mMDZiMjJpb2JxajJrbHFpMyJ9.bnC9psUhyPEjjkB5GuFU6w&limit=1'

// request({url:geoUrl, json:true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to geo service!')
//     }
//     else if(response.body.features.length===0){
//         console.log('Unable to find location')
//     }
//     else{
//         const lat = response.body.features[0].center[0]
//         const lon = response.body.features[0].center[1]
//         console.log(lat, lon)
//         const url =  'http://api.weatherstack.com/current?access_key=a6b280d43a5d2ef21fcb9e608b1d1800&query=37.8267,-122.4233&units=f'

//         request({url:url, json:true}, (error, response)=>{
//             if(error){
//                 console.log('Unable to connect to weather service!')
//             }
//             else if(response.body.error){
//                 console.log('Unable to find location')
//             }
//             else{
//                 console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. There is a '+response.body.current.precip+'% chance of rain')
//             }
//         })
//     }
// })

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmJlbmF2aTAiLCJhIjoiY2xwc3RmcG9mMDZiMjJpb2JxajJrbHFpMyJ9.bnC9psUhyPEjjkB5GuFU6w&limit=1'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

geocode('Boston', (error, data)=>{
    console.log('Error',error)
    console.log('Data', data)
})

// setTimeout(()=>{
//     console.log('2 seconds have passed')
// }, 2000)

// const  add = (num1, num2, callback)=>{
//     setTimeout(()=>{
//         const sum = num1+num2
//         callback(sum) 
//     }, 2000)
// }

// add(1, 4, (sum)=>{
//     console.log(sum)
// })