'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');
var entries = require('./listings.json');
/* Connect to your database */

mongoose.connect(config.db.uri);
var newListing;
for (var i = 0; i < entries.entries.length; i++) {
  newListing = Listing({
    code: entries.entries[i].code,
    name: entries.entries[i].name,
    //latitude: entries.entries[i].coordinates.latitude,
    //longitude: entries.entries[i].coordinates.latitude,
    address: entries.entries[i].address
  });

  newListing.save(function(err) {
    if (err) throw err;
  });

}

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
