const moongose = require("mongoose");

const politicalSchema = new moongose.Schema({
    pm_cares: {
        type: Number,
        default: 0
    },
    pmnrf: {
        type: Number,
        default: 0
    },
    upccf: {
        type: Number,
        default: 0
    },
    myNeta: {
        type: Number,
        default: 0
    }
});

module.exports = moongose.model("Political", politicalSchema);