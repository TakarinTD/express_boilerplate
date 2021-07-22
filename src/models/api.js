const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema(
  {
    name: String,
    apiId: String,
    dataStructure: Object,
    schema: Array,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Api', apiSchema);
