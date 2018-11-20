const Note = require("../models/note");

exports.all_notes = function(req, res, next) {
  Note.find({}).then(function(notes) {
    res.send(notes);
  }).catch(next);
};

exports.new = function(req, res, next) {
  let note = new Note();
  note.title = req.body.title;
  note.content = req.body.content;

  note.save().then(function(note) {
    res.send(note);
  }).catch(next);
};

exports.note_detail = function(req, res, next) {
  Note.findById(req.params.id).then(function(note) {
    res.send(note);
  }).catch(next);
};

exports.note_update = function(req, res, next) {
  Note.findById(req.params.id).then(function(note) {
    note.title = req.body.title;
    note.content = req.body.content;
    note.save().then(function(note) {
      res.send(note);
    }).catch(next);
  }).catch(next);
};

exports.note_delete = function(req, res, next) {
  Note.findByIdAndRemove(req.params.id).then(function(note) {
    res.send(note);
  }).catch(next);
}
