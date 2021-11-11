const mongoose = require('mongoose')

var collectionSchema = new mongoose.Schema({
    collectionName: String,
    collectionImg: String,
    collectionTime: Date,
    collectionBanner: String,
    collectionItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]
	}
)

var Collection = mongoose.model('collection', collectionSchema);

module.exports = Collection;