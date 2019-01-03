const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = app => {
  // save a deck list on saver
  app.post("/api/save_deck_list", async (req, res) => {
    await User.update({ _id: req.user.id }, { $push: { deckList: req.body } });
    User.findOne({ _id: req.user.id }, (err, doc) => res.send(doc.deckList));
  });

  // remove a deck list from server
  app.post("/api/remove_deck", async (req, res) => {
    await User.update(
      { _id: req.user.id },
      { $pull: { deckList: { _id: req.body.oid } } }
    );
    User.findOne({ _id: req.user.id }, (err, doc) => res.send(doc.deckList));
  });

  //fetch deck lists from server
  app.get("/api/get_deck_list", async (req, res) => {
    User.findOne({ _id: req.user.id }, (err, doc) => res.send(doc.deckList));
  });
};
