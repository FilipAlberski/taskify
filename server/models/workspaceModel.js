import mongoose from 'mongoose';

import bcrypt from 'bcrypt';

const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

  workspaceSettings: {
    workSpaceMail: {
      isTurnedOn: {
        type: Boolean,
        required: false,
        default: false,
      },

      password: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: false,
      },
      host: {
        type: String,
        required: false,
      },
      port: {
        type: Number,
        required: false,
      },
      ssl: {
        type: Boolean,
        required: false,
      },
    },
  },

  channels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel',
    },
  ],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },

  deletedAt: {
    type: Date,
    default: null,
  },

  deleted: {
    type: Boolean,
    default: false,
  },

  deletedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

Workspace.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

//password hashing for worskpaceSettings

Workspace.pre('save', function (next) {
  if (this.worskpaceSettings.workSpaceMail.password) {
    this.worskpaceSettings.workSpaceMail.password = bcrypt.hashSync(
      this.worskpaceSettings.workSpaceMail.password,
      10
    );
  }
  next();
});

export default Workspace;
