//import{ poll } from './data.json';
const poll = require("../../data.json");
const fs = require("fs");

export default function handler (req, res) {
    console.log("inside handler");
    if (req.method === 'POST') {
        console.log("inside post");
        if (req.body){
            console.log(JSON.stringify(req.body));
            console.log(process.cwd());
            fs.writeFileSync('data.json', JSON.stringify(req.body));
            res.send({
                message: "Data Saved."
            });
        } else {
            res.status(400).send({
                message: "Error No Data",
            });
        }
    } else if (req.method === 'GET') {
        //Handle GET
        res.status(200).json(poll);
    } else {
        //handle everything else
    }
}