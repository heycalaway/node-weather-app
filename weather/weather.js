const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/95c06c61d4b3b095e8bc667e244af1b2/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io servers.');
        } else if (body.code === 400) {
            callback('Unable to find that address.');
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;