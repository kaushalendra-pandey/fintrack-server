const mongoose = require("mongoose");
import subscriptions from "./subscriptions";
import bills from "./bills";

const categorySchema = new mongoose.Schema(
  {
    subscriptions: {
      type: subscriptions,
      ref: "Subscription",
      required: true,
    },
    bills: {
      type: bills,
      ref: "Bills",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);