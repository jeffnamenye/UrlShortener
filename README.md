# UrlShortener by Jeff Namenye
This is a basic Url Shortener type program.

UrlShortener Static API developed by Jeff Namenye

https://github.com/jeffnamenye/UrlShortener/releases/tag/v1.0.0
To install follow link to my git repo and click the green clone or download
button to install on your PC

If you don't already have them installed you will need **Node and NPM** you can do that through brew or through their web sites [Node.js(https://nodejs.org/en/)and NPM((https://www.npmjs.com))]

In your command line change your directory to **UrlShortener** and then **brew install npm**  this should install all dependencies in the **package.json** file into your directory. You will also need read my package.json and see if there is any thing else you may need to install on your machine. For that here is an example **npm install mocha**

Still in your command line type and still in your directory UrlShortener type
**node src/server** it should say 'Good to go on port 300'.👍

Now you need to use "postman"(https://www.getpostman.com/) once thats loaded change your drop down arrow next to the search style bar, change it to get and than type in **localhost:3000/api/v1.0.0.0/url** inside of your search style bar and hit send. You should see something like this
http://hoitytoity.com/LwnpwSH in your results box about middle of the page.

Or if you want to see it work in your browser, you have to to go into Routes then api then on line 10 you should see this **router.post** all you have to do is change *post to get* then type **localhost:3000/api/v1.0.0.0/url** into your browser window and should see this in your screen "http://hoitytoity.com/Go9PM1n"

***Update***
To be able to run it with the data base their are a few things to download. First is mysql, localenvironment, dotenv, sequelize, eslint, bcrypt, bcrypt-nodejs. I think thats all, now you want eslint as a devDependencies, to do that all you have to do is **npm install eslint --save-dev** then the rest you do as normal ex. **npm install localenvironment**

Then you have to start mysql in your command prompt, you do that by *mysql.server start** then you have to have SQLpro started with 127.0.0.1 and also host is the same...user name is root with no password. And once that starts you need to add a database with MariaDB. 
