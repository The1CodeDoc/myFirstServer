const http = require("http");

let firstName = "Peace";

let lastName = "Oluwafemi";


const server = http.createServer((req, res) => {

    res.writeHead(200);

    res.write(`Hi! My name is ${firstName} ${lastName}. I'm 12 years old and I'm currently in the Backend Track.`);

    res.end();
});

server.listen(3002, function() {
    console.log("Server is running on 3002")
});




