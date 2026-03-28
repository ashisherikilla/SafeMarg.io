const mongoose = require("mongoose")

const accidentSchema = new mongoose.Schema({

  location: {

    lat: {

      type: Number,

      required: true

    },

    lng: {

      type: Number,

      required: true

    },

    city: {

      type: String,

      required: true

    }

  },

  severity: {

    type: String,

    enum: ["Low", "Medium", "High"],

    default: "Low"

  },

  description: String,

  createdAt: {

    type: Date,

    default: Date.now

  }

})

module.exports = mongoose.model("Accident", accidentSchema)