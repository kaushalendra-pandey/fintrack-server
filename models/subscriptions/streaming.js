const moongose = require("mongoose");

const streamingSchema = new moongose.Schema({
    netflix: {
        type: Number,
        default: 0
    },
    hulu: {
        type: Number,
        default: 0
    },
    youtube: {
        type: Number,
        default: 0
    },
    vimeo: {
        type: Number,
        default: 0
    },
    apple_music: {
        type: Number,
        default: 0
    },
    spotify: {
        type: Number,
        default: 0
    },
    amazon_prime: Number
});

module.exports = moongose.model("Streaming", streamingSchema);