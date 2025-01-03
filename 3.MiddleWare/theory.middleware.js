
1.What is the Middleware

1.Middle ware is a request handler, which aloows you to intercept and manipulate requests and responses before they reach route handlers 


// basic syntax for the middle ware 
app.get(path, (req,res,next) => {}, (req,res) => {})

middleware object takes three arguments 
1. Request object
2. Response Object 
3. Next Function 

as we can see there is two objects and One Function 

2. Types of Middleware
Express js offers different types of Middlewares
1  Application-level Middlewares 
2. Router level Middlewares 
3. Error Handling Middlewares 
4. Built-in Middlewares 
5. Third Party Middlewares 

3. Steps to Implement Middleware in Express
you can see it on the practical.middleware.js file

4. ``