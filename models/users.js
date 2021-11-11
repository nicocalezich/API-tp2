const { model, Schema } = require("mongoose");
//const crypto = require("crypto");

const ObjectId = require("mongoose").Types.ObjectId;

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  dni: {type: String, required: true},
  created_at: { type: Date, default: Date.now },
  accum_commission: {type: Double, required: false },
}); 