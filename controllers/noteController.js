const Note = require("../models/note");

exports.new = function(req, res, next) {
  let note = new Note();
  note.title = req.body.title;
  note.content = req.body.content;

  note.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send(note);
  })
};
