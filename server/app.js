const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
require("dotenv").config();

const ROLE = {
  ADMIN: "admin ",
};
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const startupSchema = require("./Schemas/startup");
const vcSchema = require("./Schemas/vc");
const port = process.env.PORT || 3001;

//model declarations
const startup = new mongoose.model("startup", startupSchema);
const vc = new mongoose.model("vc", vcSchema);

const createEntry = async (model, data) => {
  const node = new model(data);
  await node.save();
};
//These save the functions in the database
const createStartupEntry = async (data) => {
  const node = startup(data);
  await node.save();
};
const createVcEntry = async (data) => {
  const node = vc(data);
  await node.save();
};
//This returns the data
const returnData = async (type) => {
  let data;
  if (type === "startup") {
    try {
      data = await startup.find({});
      return data;
    } catch (err) {
      return err;
    }
  }
  if (type === "vc") {
    try {
      data = await vc.find({});
      return data;
    } catch (err) {
      return err;
    }
  }
};

//starts up a mongodb document with startupfair as the name
async function main() {
  await mongoose.connect(
    "mongodb+srv://siddarth:snt515%23Q@ecell-startupfair.wrlqtlq.mongodb.net/startupfair"
  );
}

main().catch((err) => console.log(err));

//middlewaree to parse req.body as json
app.use(cors());
app.use(express.json());
app.use(auth(config));

app.post(
  "/api/startup",
  [
    body("Name").trim().escape(),
    body("Sector").trim().escape(),
    body("Location").trim().escape(),
    body("Hear_how").trim().escape(),
    body("Representative_name").trim().escape(),
    body("Email_member").not().isEmpty().trim().escape(),
    body("Contact_number").trim().escape(),
    body("Phase").not().isEmpty().trim().escape(), //
    body("Help_expected").not().isEmpty().trim().escape(), //
    body("Hiring_interest").isString(),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return res.status(400).json({ Error: error.array() });
    }
    const data = req.body;
    createStartupEntry(data);
    res.status(200).json({ Message: "Sent" });
  }
);

//To see the data entries
app.post("/api/data", async (req, res) => {
  console.log(req.body);
  const type = req.body.type;
  const auth = req.body.auth;

  if (auth === true) {
    let data;
    data = await returnData(type);
    console.log(data);
    res.json(data);
  } else {
    res.send("Not Authorized");
  }
});

app.get("/api/data", async (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "  in" : "logged out");
});

app.post(
  "/api/vc",
  [
    body("Email").not().isEmpty().isEmail().normalizeEmail(),
    body("Name").trim().escape(),
    body("Contact_Number").trim(),
    body("Purpose").not().isEmpty().trim(),
    body("Interest.Domain").not().isEmpty(),
    body("Interest.Stage").not().isEmpty(),
  ],

  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ Error: error.array() });
    }
    res.json({ Message: "Sent" }).status(200);
    const data = req.body;
    createVcEntry(data);
  }
);

app.listen(port, () => {
  console.log("Server running at port " + port);
});
