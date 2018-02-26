var axios = require('axios');

//NYT API REQUEST

var searchNYT = function (article, startYear, endYear) {
    const authKey = "a73c15b3c86f4753ba1de69076c1ea0e";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
        article + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";

    axios.get('queryURL')
        .then(function (response) {
            var articlesResult = [];
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = {
    searchNYT, 
}