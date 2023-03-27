const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        permissions: {
            read: {
                type: Boolean,
                default: false,
            },
            write: {
                type: Boolean,
                default: false,
            },
            delete: {
                type: Boolean,
                default: false,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Permission", PermissionSchema);
