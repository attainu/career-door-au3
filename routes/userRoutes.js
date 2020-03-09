var express = require("express");
var router = express.Router();
const { userModel } = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/* GET users listing. */

router.post("/loginUser", (req, res) => {
  const errors = {};
  userModel
    .findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        errors.email = "No user registred with this email";
        return res.status(404).json(errors);
      }
      bcrypt.compare(req.body.password, user.password).then(isMatch => {
        if (isMatch) {
          // sign jwt token
          const payload = {
            id: user.dataValues.id,
            email: user.dataValues.email,
            accountType: user.dataValues.user_type,
            name: user.dataValues.first_name + user.dataValues.last_name
          };
          console.log(payload);
          jwt.sign(
            payload,
            "secret",
            {
              expiresIn: 86400
            },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Incorrect Password";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
