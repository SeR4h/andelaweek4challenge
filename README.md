# Requirements
-node
-npm
# Setting up the project
1. Clone the repository and move to the root of the project
```
git clone https://github.com/SeR4h/andelaweek4challenge.git
cd andelaweek4challenge
```
2. Install dependencies
```
npm install request --save
npm install readline --save
npm install dotenv --save
```
3. Add news api key
-This can be done by either using a dotenv file or adding it directly in the index.js file. It is recommended adding a dotenv file since its easier and also for security purposes.  
-Navigate to www.newsapi.org to register for an api key 
    -Create a .env file in the root directory which is similar to the [.env-example]
    -Copy your api key to the .env file
# Run the application
```
node index.js
```
# Features
Type in a number to view preffered news headlines.
 