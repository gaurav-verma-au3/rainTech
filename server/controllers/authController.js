const User = require("../models/User");

const register = async (req, res) => {
  try {
    // check email exixtance
    const u = await User.find({ email: req.body.email });
    // if user found return error
    if (u.length) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    } else {
      // else create user
      const user = await User.create({
        email: req.body.email,
        password: req.body.password,
      });

      return res.json({
        success: true,
        message: "Registered successfully",
      });
    }
  } catch (error) {
    console.log("Error with registering: ", error);
    return res.json({
      success: false,
      message: "Unable to register",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // login user
  try {
    const user = await User.find({ email });
    if (user.length && user[0].password === password) {
      let u = { ...user[0] };
      delete u.password;
      return res.json({
        success: true,
        data: u,
      });
    } else {
      return res.json({
        success: false,
        message: "wrong email or password",
      });
    }
  } catch (error) {
    console.log("Error with fetching thoughts: ", error);
    return res.json({
      success: false,
      message:
        "Sorry, Error with login . We are looking into it please try after some time.",
    });
  }
};

module.exports = {
  login,
  register,
};
