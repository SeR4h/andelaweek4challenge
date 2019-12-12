var Request = require('request');
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome to our news application');
console.log('1.ABC News \n 2.BBC Sports News \n 3.BBC News \n 4.CBC News ');
console.log('Please choose preffered News source');
rl.question('Type option: ', function (option) {
    if (option === '1') {
        console.log('ABC News');
        Request.get("https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=e1f6aaadd26d4ced846348e1222b23d7", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
        });
    }
    else if (option === '2') {
        console.log('BBC Sports News');
        Request.get("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=e1f6aaadd26d4ced846348e1222b23d7", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
        });
    }
    else if (option === '3') {
        console.log('BBC News');
        Request.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e1f6aaadd26d4ced846348e1222b23d7", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
        });
    }
    else if (option === '4') {
        console.log('CBC News');
        Request.get("https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=e1f6aaadd26d4ced846348e1222b23d7", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
        });
    }
    else {
        console.log('Invalid input')
        rl.close();
    }
    rl.close();
});
