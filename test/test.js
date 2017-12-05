/**
 * Created by USER on 5/12/2017.
 */

var chai = require('chai');
var expect = require('chai').expect;

var assert = require('assert');
var APIKEY = 'a66a80833494504a31c089ab4c91971e';
var weatherQuery = require('../weather-query');

describe('weatherpackage', function () {
    describe('Configuration', function () {
        it('should set the APIKEY', function () {
            weatherQuery.setApiKey(APIKEY);
            assert.equal(APIKEY, weatherQuery.getApiKey());
        });

        it('should set the city name to query parameters', function () {
           weatherQuery.setCityName('miami');
           var city = weatherQuery.getConfiguration().parameters.city;
           expect(city).be.not.empty;
           assert.equal(city, 'miami');
        });

        it('should set the coordinates to query parameters', function(){
            weatherQuery.setCoordinates({lat:25, lon:45});
            var lat = weatherQuery.getConfiguration().parameters.coordinates.lat;
            var lon = weatherQuery.getConfiguration().parameters.coordinates.lon;
            assert.equal(lat, 25);
            assert.equal(lon, 45);
        });
    })
});



