const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const availableJobSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  image_url: {
    type: String,
  },
});

const availableJobs = mongoose.model("availableJobs", availableJobSchema);

module.exports = availableJobs;
