const mongoose = require("mongoose");

const { Schema } = mongoose;

const dashboardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    showOnSidebar: {
        type: Boolean,
        default: true,
        required: true,
    },
    isPrivate: {
        type: Boolean,
        default: false,
        required: true,
    },
    querySettings: {
        type: Object,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model("Dashboard", dashboardSchema);
