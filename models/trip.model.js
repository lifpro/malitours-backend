const mongoose = require("mongoose");
const schema = mongoose.Schema;
const siteSchema = require("./site.model");

const tripSchema = schema({
  city: { type: String, required: true },
  activities: [siteSchema],
  date: Date,
});

const Trip = mongoose.model("trip", tripSchema);

module.exports = Trip;
