/*

# Validating User password 
bcrypt.js

let's try loggin in using 


Adding sessions for authentication

npm module
called
epxress-session
npm i express-session

const session require('express-session)

and use it as any other global middleware

const sessionConfig={
    name:'monkey',//default name is sid , if we name it it will be hard to guess

    secret:"keep it secret,keep it safe", //for encrypt or decrypt we setup this in env var in production
    cookie:{ //takes object with predefined keys
        //how long the session gonna work
        maxAge:1000*30 //after 30 second it' gonna expire after 30 sec
        secure:false // this should be true in production very imp props during development ist ok to be false but in production it should be true
        httpOnly:true //cannot be accessed through js

    }
    resave:false,
    saveUnitialize:false //GDPR complaines
    
}
server.use(session(sessionConfig))
//this accept 1st parameter a conf object
lets name sessionConfig and 
create it above

*/