const http = require("http");
const os = require('os');

async function callServer(){
    const body = JSON.stringify({
        uptime: getUptime()
    })

    const options = {
        hostname: 'asghardian.com',
        path: '/compute',
        port: 3333,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        console.log("Sending data")
        let response = await httpRequest(options, body);
        console.log('Request time: %s, response: - %s', new Date().toLocaleString(), response);
    }catch(err){
        console.log('Error - %s', err);
    }
}

function httpRequest(options, data){
    return new Promise((resolve, reject) => {
        const req = http.request(options, res => {
            let responseBody = '';
            res.on('data', (chunk) => {
                responseBody += chunk;
            })

            res.on('end', () => {
                resolve(JSON.parse(responseBody));
            })
        })
        req.on('error', (err) => {
            reject(err);
        })
        req.write(data);
        req.end();
    })
}


function getUptime(){
    let uptime = os.uptime();
    let hours = Math.floor(uptime/(3600))
    let minutes = Math.floor((uptime - (hours * 3600)) /60).toString().padStart(2, "0")
    let seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60)).toString().padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
}

callServer();

setInterval(callServer, 60000)
