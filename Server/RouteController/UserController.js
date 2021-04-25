const User = require("../Model/User");
var csv = require("csv-express");

createUser = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a user"
    });
  }
  let userList = body.userList;
  userList.forEach((userData) => {
    const user = new User(userData);
    user
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: user._id,
          message: "User created!"
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "User not created!"
        });
      });
  });

  if (!userList) {
    return res.status(400).json({ success: false, error: err });
  }
};

updateUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update"
    });
  }
  console.log("Sdfsdf");
  await User.findOne({ email: req.params.email }, (err, user) => {
    if (err) {
      console.log("SFsdf");
      return res.status(404).json({
        err,
        message: "User not found!"
      });
    }
    user.name = body.name;
    user.email = body.email;
    user.gender = body.gender;
    user.status = body.status;
    console.log(req, body);
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: "User updated!"
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "User not updated!"
        });
      });
  });
};

deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(200).json({ success: false, error: `No Users found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

exportData = async (req, res) => {
  var filename = "users_data.csv";
  await User.find()
    .lean()
    .exec({}, function (err, users) {
      if (err) res.send(err);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=" + filename);
      res.csv(users, true);
    });
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
  exportData
};
