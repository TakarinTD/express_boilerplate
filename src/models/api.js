const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema(
  {
    name: String,
    apiId: String,
    link: String,
    method: String,
    body: Object,
    params: Object,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Api', apiSchema);
