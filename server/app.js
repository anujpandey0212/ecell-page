const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const startupSchema = require("./Schemas/startup");
const vcSchema = require("./Schemas/vc");
const port = process.env.PORT || 3000;

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

//starts up a mongodb document with startupfair as the name
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/startupfair");
}

main().catch((err) => console.log(err));

//middlewaree to parse req.body as json
app.use(express.json());

app.post(
  "/api/startup",
  [
    body("Email").isEmail().normalizeEmail(),
    body("Name").not().isEmpty().trim().escape(),
    body("Sector").not().isEmpty().trim().escape(),
    body("Location").not().isEmpty().trim().escape(),
    body("Hear_how").not().isEmpty().trim().escape(),
    body("Representative_name").not().isEmpty().trim().escape(),
    body("Member_name").not().isEmpty().trim().escape(),
    body("Email_name").not().isEmpty().trim().escape(),
    body("Contact_Number").not().isEmpty().trim().isMobilePhone(),
    body("Phase").not().isEmpty().trim().escape(),
    body("Hiring_interest").isBoolean(),

    body("Links.Linkedin").trim().isURL(),
    body("Links.Social_Media.*").trim().isURL(),
  ],
  (req, res) => {
    body("Email");
    res.send("sent");
    console.log(req.check);
    const data = req.body;
    createStartupEntry(data);
  }
);

app.post(
  "/api/vc",
  [
    body("Email").isEmail().normalizeEmail(),
    body("Name").not().isEmpty().trim().escape(),
    body("Contact_Number").not().isEmpty().trim().isMobilePhone(),
    body("Links.Website").trim().isURL(),
    body("Links.Linkedin").trim().isURL(),
    body("Links.Social_Media.*").trim().isURL(),
  ],

  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ Error: error.array() });
    }
    res.send("sent");
    const data = req.body;
    createVcEntry(data);
  }
);

app.listen(port, () => {
  console.log("Server running at port " + port);
});
