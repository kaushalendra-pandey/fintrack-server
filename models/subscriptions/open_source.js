const moongose = require("mongoose");

const openSourceSchema = new moongose.Schema({
    wikipedia: {
        type: Number,
        default: 0
    },
    github: {
        type: Number,
        default: 0
    },
    vlc: {
        type: Number,
        default: 0
    },
    win_rar: {
        type: Number,
        default: 0
    },
    linux: {
        type: Number,
        default: 0
    },
});

module.exports = moongose.model("OpenSource", openSourceSchema);