const moongose = require("mongoose");

const ngoSchema = new moongose.Schema({
    unicef: {
        type: Number,
        default: 0
    },
    wwf: {
        type: Number,
        default: 0
    },
    un: {
        type: Number,
        default: 0
    },
    ocde: {
        type: Number,
        default: 0
    },
    rainn: {
        type: Number,
        default: 0
    },
    goonj: {
        type: Number,
        default: 0
    },
});

module.exports = moongose.model("Ngo", ngoSchema);