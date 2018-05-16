var mongoose = require("mongoose");
var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  httpAdapter: 'https',
  apikey: process.env.GEOCODER_API_KEY,
  formatter: null
}
var geocoder = NodeGeocoder(options);

var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   location: String,
   lat: Number,
   lng: Number,
   createdAt: { type: Date, default: Date.now },
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
},{usePushEach: true});

module.exports = mongoose.model("Campground", campgroundSchema);
