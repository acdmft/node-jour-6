const prompt = require("prompt");

prompt.start();

let schema = {
    properties: {
        username: {
            description: "Enter your name",
            pattern: /[a-zA-Z0-9\-]+$/,
            message: "Name must contain only letters, numbers and hyphens",
            required: true
        },
        email: {
            description: "Enter your email", 
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            message: "Wrong email format",
            required: true
        },
        password: {
            description: "Enter your password",
            pattern: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$/,
            minLength: 6,
            message: "Password must contain at least 6 characters (at least 1 letter and 1 number), it can as well contain hyphens",
            required: true
        }
    }
}

function checkProfile() {
    prompt.get(schema, function (err, res) {
        if (err) {
            console.log("Error");
            return checkProfile();
        }
        console.log("All is good!");
    });
}

checkProfile();