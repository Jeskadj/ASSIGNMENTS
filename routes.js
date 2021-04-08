const express = require('express');
const users = require('./users')
const router = express.Router();
router.post('/SignUp', function (request, response) {
    const { username, password } = request.body

    
    console.log(username);
    let user = users.filter(arrayelement => arrayelement.username === username)
    
    console.log(user);
    if (user.length == 1) {
        if (user[0].password === password) {
            console.log(user.length)
            response.send({ success: false, message: "User already exists " })
        }
        
        
    }
    else {
        //     response.send({"user does not exist"})
        // }
        // })
        console.log(user.length)
        users.push ({username:username, password:password})
        response.send({ success: true, message: "SignUp successful" })

    }
    // response.send("SignUp")
})


router.post("/login", function (request, response) {
    const { username, password } = request.body

    console.log(username);
    let user = users.filter(arrayelement => arrayelement.username === username)

    console.log(user);
    if (user.length == 1) {
        if (user[0].password === password) {
            console.log(user.length)
            response.send({ success: true, message: "login successful" })
        }

        response.send({ success: false, message: "login failed. user or password wrong" })

    }
    else {
        response.send({ message: "user does not exist" })
    }
    console.log(user.length)
    response.send({ success: false, message: "login failed" })
})


// response.send("login")

router.get('/allusers', function (request, response) {
    response.status(200).send(users)
})

module.exports = router