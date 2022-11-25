const axios = require('axios');

axios.get('https://www.google.com')
    .then(function (response) {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log("Finally, it got to my turn!!!!!!!")
    })
