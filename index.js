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
Please choose preffered News source`;
console.log(welcomeMessage)
rl.question('Type option: ', function (option) {
    if (option === '1') {
        console.log('ABC News');
        getTopheadlines('abc-news');
    }
    else if (option === '2') {
        console.log('Bloomberg');
        getTopheadlines('bloomberg');
    }
    else if (option === '3') {
        console.log('BBC News');
        getTopheadlines('bbc-news');
    }
    else if (option === '4') {
        console.log('CBC News');
        getTopheadlines('cbc-news');
    }
    else {
        throw new Error('Invalid input');
    }
    rl.close();
});
