const { model } = require("mongoose");

class NewController {

    index(req, res) {
        res.json("heloooo");
    }

}

module.exports = new NewController;
