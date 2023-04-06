const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'

function generateToken(id){
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
//register
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    let {name,username,email,address,phone_no,qualification,experience} = req.body;
    //create new user
    const newUser = await new User({
      username: username,
      email: email,
      password: hashedPassword,
      address:address,
      name:name,
      phone_no:phone_no,
      qualification:qualification,
      experience:experience,
    });

    //save user and return response
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json({"user":user,"token":{"access":generateToken(user._id),"refresh":null}})
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
