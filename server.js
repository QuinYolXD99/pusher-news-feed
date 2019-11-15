const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const pusher = require("./controller/pusherNotifications")

pusher.trigger('my-channel', 'my-event', {
    "message": "test"
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.listen(PORT, function () {
    console.log("Server is running on Port:", PORT);
});
