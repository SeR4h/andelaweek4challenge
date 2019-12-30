var Request = require('request');
var readline = require('readline');
require('dotenv').config();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getTopheadlines(preferredNewsSource) {
    const apiKey = process.env.apiKey;
    const url = `https://newsapi.org/v2/top-headlines?sources=${preferredNewsSource}&apiKey=${apiKey}`;
    Request.get(url, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        const { articles } = JSON.parse(body);
        const [{ source: { name: sourceName } }] = articles;
        const articlesArray = articles.map((article, articleIndex) => `Article (${articleIndex})
Title: ${article.title}
${article.content}
Read more: ${article.url} `
        );
        const articleString = articlesArray.join('\n');
        const headlines = `   ${sourceName}
        ${articleString}`
        console.log(headlines)
    });
}

const welcomeMessage = `Welcome to our news application
1. ABC News
2. Bloomberg
3. BBC News
4. CBC News
Please choose preffered News source
Type option: `;

const sourceKeys = {
    "1": "abc-news",
    "2": "bloomberg",
    "3": "bbc-news",
    "4": "cbc-news"
};

rl.question(welcomeMessage, function (option) {
    if (option in sourceKeys) {
        getTopheadlines(sourceKeys[option]);
    }
    else {
        throw new Error('Invalid input');
    }
    rl.close();
});
