# andelaweek4challenge
Consuming a news api(node.js)
    How to set up this work
1.Create an empty folder and run npm init through the terminal to initilalize the project
2.Navigate to www.newsapi.org/ to register for an api key    
3.Install request module by running npm install request --save: this is used to get json data from the news api
4.Install readline module by running npm install readline--save :this is used to read user input data
5.Install dotenv module by running npm install dotenv --save : used to store environment variables that your program will be using such as the apiKey.
6.Create an index.js file and add the code in index.js
    How to run this work
Create a .env file and add the apiKey you got then,    
run node index.js in your terminal to see results 
    How to add environment variables to .env file
Open .env file and add variables such as
#Api
API_TOKEN = myUniqueApiToken
#Database
DATABASE_NAME= myDatabaseName    

See .env-example file 
 