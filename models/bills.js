const moongose = require("mongoose");

const billsSchema = new moongose.Schema(
  {
    water: Number,
    electricity: Number,
    internet: Number,
    phone: Number,
    tv: Number,
    gas: Number,
  },
  { timestamps: true }
);

module.exports = moongose.model("Bills", billsSchema);