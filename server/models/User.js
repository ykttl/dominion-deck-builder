const mongoose = require('mongoose');
const { Schema } = mongoose;
const DeckList = require('./DeckList');

const userSchema = new Schema({
  googleId: String,
  username: String,
  password: String,
  deckList: [DeckList]
});

module.exports = mongoose.model('users', userSchema);
