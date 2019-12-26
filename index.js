var Request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getTopheadlines(preferredNewsSource) {
    const apiKey = `e1f6aaadd26d4ced846348e1222b23d7`;
    const url = `https://newsapi.org/v2/top-headlines?sources=${preferredNewsSource}&apiKey=${apiKey}`;
    Request.get(url, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        console.log(JSON.parse(body));
    });
}
const welcomeMessage = `Welcome to our news application
1. ABC News
2. Bloomberg
3. BBC News
4. CBC News
Please choose preffered News source
Type option: `;
const sources = {
    "1": {
        name: "ABC News",
        id: "abc-news"
    },
    "2": {
        name: "Bloomberg",
        id: "bloomberg"
    },
    "3": {
        name: "BBC News",
        id: "bbc-news"
    },
    "4": {
        name: "CBC News",
        id: "cbc-news"
    }
}
rl.question(welcomeMessage, function (option) {
    if (option in sources) {
        console.log(sources[option].name);
        getTopheadlines(sources[option].id);
    }
    else {
        throw new Error('Invalid input');
    }
    rl.close();
});
