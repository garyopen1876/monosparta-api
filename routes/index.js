const device_controller = require("../controller/device_check.js");
const message_controller = require("../controller/message.js");

module.exports = function (router) {
    router.get("/", device_controller.device_check);
    router.get("/message", message_controller.get_message);
    router.post("/message", message_controller.post_message);
};