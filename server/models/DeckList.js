const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeckList = new Schema({
  deckName: String,
  cards: [String]
});

module.exports = DeckList;
