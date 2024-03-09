const express = require("express");
var bp = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("./config");
const router = express.Router();

const app = express();
app.use(bp.json());

router.post("/login", (req, res) => {
  const postdata = req.body;
  const user = {
    email: postdata.email,
    name: postdata.name,
  };
  const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
  const refreshtoken = jwt.sign(user, config.refreshTokenSecret, {
    expiresIn: config.refreshTokenLife,
  });

  const response = {
    status: "Logged IN",
    token: token,
    refreshToken: refreshtoken,
  };
  res.status(200).json(response);
});
router.post("/token", (req, res) => {
  const postData = req.body;
  if (postData.refreshToken && postData.refreshToken in tokenList) {
    const user = {
      email: postData.email,
      name: postData.name,
    };
    const token = jwt.sign(user, config.secret, {
      expiresIn: config.tokenLife,
    });
    const response = {
      token: token,
    };
    tokenList[postData.refreshToken].token = token;
    res.status(200).json(response);
  } else {
    res.status(404).send("invalid request");
  }
});

router.use(require("./tokenChecker"));
router.get("/secure", (req, res) => {
  res.send("I am secured...!");
});
app.use("/api", router);
app.listen(4000, () => {
  console.log("server is ready");
});
