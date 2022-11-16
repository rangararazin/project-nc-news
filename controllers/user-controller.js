const { selectUsers } = require("../models/user-model");

exports.getUsers = (req, res, next) => {
  selectUsers().then((users) => {
    res.status(200).send({ users });
  });
};
