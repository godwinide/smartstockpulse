const { model, Schema } = require("mongoose");

const HistorySchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: Date.now
    }
});

module.exports = History = model("History", HistorySchema);