const fs = require('fs');
const data = require("../message.json");



const get_message = async (_req, res) => {
    return res.status(200).json({ data: data });
};

const post_message = async (req, res) => {
    data.push({ "title": req.body.title, "date": req.body.date })
    fs.writeFile("message.json", JSON.stringify(data), (err) => {
        if (err) console.log(err);
    })
    return res.status(200).json({ message: "OK" });
};


module.exports = {
    get_message,
    post_message,
};