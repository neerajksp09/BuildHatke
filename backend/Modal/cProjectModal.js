const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

  // 📍 Basic Info
  location: { type: String },
  plotsize: { type: String },
  plotface: { type: String },   // ✅ added
  plottype: { type: String },   // ✅ added
  budget: { type: String },
  timeline: { type: String },
  sdate: { type: String },      // ✅ added

  // 🏠 House Config
  tofhome: { type: String },
  floors: { type: String },     // ✅ added
  bedrooms: { type: String },   // ✅ added
  bathrooms: { type: String },  // ✅ added
  kitchen: { type: String },    // ✅ added
  kitchenoneach: { type: String },
  livingRoom: { type: String }, // ✅ added
  diningRoom: { type: String }, // ✅ added
  addroom: { type: String },

  // 🏗️ Space & Layout
  parking: { type: String },
  balcony: { type: String },
  garden: { type: String },
  outdoor: { type: String },
  basement: { type: String },
  terrace: { type: String },

  // 🧱 Material
  material: { type: String },
  cementType: { type: String },
  steelQuality: { type: String },
  tiles: { type: String },      // ✅ added
  doors: { type: String },      // ✅ added

  // 🎨 Design
  designStyle: { type: String },
  colorP: { type: String },
  interiorstyle: { type: String },
  light: { type: String },      // ✅ added
  ceiling: { type: String },    // ✅ added

  // ⚡ Smart Features
  smartHome: { type: String },  // ✅ added
  cctv: { type: String },       // ✅ added
  solar: { type: String },      // ✅ added
  rainwater: { type: String },  // ✅ added
  lift: { type: String },       // ✅ added
  vastu: { type: String },      // ✅ added

  // 📝 Extra
  specialreq: { type: String },

  // 👤 User Ref
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  // 📊 Status
  status: {
    type: String,
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);