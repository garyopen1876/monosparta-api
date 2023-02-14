const data = require("../message.json");

const get_message = async (_req, res) => {
    return res.status(200).json({ data: data });
};

const post_message = async (_req, res) => {
    return res.status(200).json({ message: "User does not exist" });
};


module.exports = {
    get_message,
    post_message,
};