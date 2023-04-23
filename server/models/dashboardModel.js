const mongoose = require("mongoose");

const { schema } = mongoose;

const dashboardSchema = new schema({
    name: {
        type: String,
        required: true,
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
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
