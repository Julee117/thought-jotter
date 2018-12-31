const twilio = require('twilio');
const config = require('../config');
const accountSid = config.sid;
const authToken = config.token;
var client = new twilio(accountSid, authToken);
const User = require('../models/user');
const Note = require('../models/note');

exports.text = function(req, res, next) {
  const from = req.body.From;
  const to = req.body.To;
  const body = req.body.Body;

  User.findOne({phonenumber: req.body.From}, (err, user) => {
    if (!user) {
      client.messages.create({
        body: "Please sign up to use this feature",
        to: from,
        from: to
      })
    } else {
      if (body === "JOT") {
        const note = new Note();
        note.user = user._id;
        note.title = "N/A";
        note.content = "N/A";
        note.save(() => {
          client.messages.create({
            body: "Please jot down a title",
            to: from,
            from: to
          })
        })
      } else {
        Note.find({user: user._id},null, {sort: {date: -1}}, (err, note) => {
          if (note[0].title == "N/A" && note[0].content == "N/A") {
            Note.findByIdAndUpdate(note[0]._id, {"$set": {"title": body}}, {"new": true}, () => {
              client.messages.create({
                body: "Jot down your thoughts",
                to: from,
                from: to
              })
            })
          } else if (note[0].content == "N/A") {
            Note.findByIdAndUpdate(note[0]._id, {"$set": {"content": body}}, {"new": true}, () => {
              client.messages.create({
                body: "Thanks for your thoughts",
                to: from,
                from: to
              })
            })
          }
        })
      }
    }
  })
}
