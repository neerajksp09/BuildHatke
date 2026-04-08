const mongoose = require('mongoose');

const projectSchema =  mongoose.Schema({
  // 📍 Basic Info
  location: {
    type: String,
    // required: true
  },
  plotsize: {
    type: String,
    // required: true
  },
  budget: {
    type: String,
    // required: true
  },
  timeline: {
    type: String
  },

  // 🧱 Material
  material: {
    type: String, 
    // required: true
  },
  cementType: {
    type: String
  },
  steelQuality: {
    type: String
  },

  // 🏠 House Config
  tofhome: {
    type: String
  },
  kitchenoneach: {
    type: String
  },
  addroom: {
    type: String
  },

  // 🏗️ Space & Layout
  parking: {
    type: String
  },
  balcony: {
    type: String
  },
  garden: {
    type: String
  },
  outdoor: {
    type: String
  },
  basement: {
    type: String
  },
  terrace: {
    type: String
  },

  // 🎨 Design
  designStyle: {
    type: String
  },
  colorP: {
    type: String
  },
  interiorstyle: {
    type: String
  },

  // ⚡ Smart Features
  smartFeatures: {
    type: String
  },

  // 📝 Extra
  specialreq: {
    type: String
  },
  uid:{
type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true
  }
,
  // 📊 Status
  status: {
    type: String,
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);