const moongose = require("mongoose");

const legacy_mediaSchema = new moongose.Schema({
  twitch: {
        type: Number,
        default: 0
    },
  youtube: {
        type: Number,
        default: 0
    },
  patreon: {
        type: Number,
        default: 0
    },
  npr: {
        type: Number,
        default: 0
    },
  only_fans: {
        type: Number,
        default: 0
    },
});

module.exports = moongose.model("LegacyMedia", legacy_mediaSchema);