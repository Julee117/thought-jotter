const User = require('../models/user');
const jwt = require('jwt-simple');

function userToken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user._id, iat: timestamp}, process.env.SEC);
}

exports.signup = function(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password

  if (!username || !email || !password) {
    return res.send({error: "Please fill in all the fields"});
  }

  User.findOne({username: username}, function(err, user) {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.send({error: "Username taken"})
    }

    const newUser = new User({
      username: username,
      email: email,
      password: password
    })

    newUser.password = newUser.generateHash(newUser.password);

    newUser.save(function(err) {
      if (err) {
        return next(err);
      }
      res.send({token: userToken(newUser)});
    })
  })
}

exports.login = function(req, res, next) {
  res.send({token: userToken(req.user)});
}


exports.all_users = function(req, res, next) {
  User.find().then(function(users) {
    res.send(users);
  }).catch(next);
};

exports.user_delete = function(req, res, next) {
  User.findByIdAndRemove(req.params.id).then(function(user) {
    res.send({message: "Successfully removed"});
  }).catch(next);
}
