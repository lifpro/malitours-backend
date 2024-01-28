const mongoose = require("mongoose");
const schema = mongoose.Schema;
const siteSchema = require("./site.model");

const citySchema = schema({
  image: String,
  name: String,
  activities: [siteSchema],
});

const City = mongoose.model("city", citySchema);

module.exports = City;
