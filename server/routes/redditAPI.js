var express = require('express');
var router = express.Router();
const axios = require('axios');

const getJsonFromReddit = async () => {
    try {
        const response = await axios.get(
            'https://www.reddit.com/r/programmerhumor.json'
        );
        return JSON.stringify(response.data);
    } catch(error){
        const response = await error;
        return JSON.stringify(error.data);
    }
}

router.get('/', function(req, res, next) {
    getJsonFromReddit().then(response => res.send(response));
});

module.exports = router;