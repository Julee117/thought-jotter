const Note = require('../models/note');
const passport = require('passport');

exports.all_notes = function(req, res, next) {
  Note.find({user: req.user._id}).then(function(notes) {
    res.send(notes);
  }).catch(next);
};

exports.new = function(req, res, next) {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      user: req.user._id
    });

    note.save().then(function(note) {
      res.send(note);
    }).catch(next);
};

exports.note_detail = function(req, res, next) {
  Note.findById(req.params.id).then(function(note) {
    res.send(note);
  }).catch(next);
};

exports.note_delete = function(req, res, next) {
  Note.findByIdAndRemove(req.params.id).then(function(note) {
    res.send({message: "Successfully removed"});
  }).catch(next);
}
