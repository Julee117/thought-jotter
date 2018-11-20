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

exports.note_detail = function(req, res, next) {
  Note.findById(req.params.id, function(err, note) {
    if (err) {
      return next(err);
    }
    res.send(note);
  })
};

exports.note_update = function(req, res, next) {
  Note.findById(req.params.id, function(err, note) {
    if (err) {
      return next(err);
    } else {
      note.title = req.body.title;
      note.content = req.body.content;
      note.save(function(err) {
        if (err) {
          return next(err);
        }
        res.send(note);
      })
    }
  })
};
