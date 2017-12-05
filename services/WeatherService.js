/**
 * Created by USER on 5/12/2017.
 */


const axios = require("axios");
var URL_PATH  = 'http://openweathermap.org/data/2.5/weather?';


function buildQuery(configuration){
    var query = URL_PATH;
    if(configuration.city){
        query+= 'q='+ configuration.city;
    }else if(configuration.coordinates){
        query+= 'lat=' + coordinates.latitude + '&lon=' + coordinates.longitude;
    }
    query+= '&appid=' + configuration.APIKEY;
    return  query;
}



exports.getWeather = function (configuration, callback) {

    var query = buildQuery(configuration);
    axios
        .get(query)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

};