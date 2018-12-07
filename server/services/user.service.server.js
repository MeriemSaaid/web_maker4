module.exports = function(app) {
  const UserModel = require("../models/user/user.model.server");
  // create a user
  app.post("/api/user", createUser);
  // get user by Id
  app.get("/api/user/:uid", findUserById);
  // get user
  app.get("/api/user", findUser);
  //update a user
  app.put("/api/user", updateUser);

  //Function to create user
  async function createUser(req, res) {
    var user = req.body;
    const data = await UserModel.createUser(user);
    res.json(data);
  }
  //Search for user by Id
  async function findUserById(req, res) {
    const userId = req.params["uid"];
    let user = await UserModel.findUserById(userId);
    res.json(user);
  }
  //Find user by username and password
  async function findUser(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if (username && password) {
      let user = await UserModel.findUserByCredentials(username, password);
      res.json(user);
      return;
    }

    if (username) {
      let user = await UserModel.findUserByUsername(username);
      res.json(user);
      return;
    }
  }

  //Update User
  async function updateUser(req, res) {
    const user = req.body;
    const uid = user._id;
    let data = await UserModel.updateUser(uid, user);
    res.json(data);
  }
};
