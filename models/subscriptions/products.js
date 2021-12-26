const moongose = require("mongoose");

const productsSchema = new moongose.Schema({
    medical: {
        type: Number,
        default: 0
    },
    lootcrate: {
        type: Number,
        default: 0
    },
    starbucks: {
        type: Number,
        default: 0
    },
    cafe_coffee: {
        type: Number,
        default: 0
    },
    sodexo: {
        type: Number,
        default: 0
    },
    google_play: {
        type: Number,
        default: 0
    }
});

module.exports = moongose.model("Products", productsSchema);