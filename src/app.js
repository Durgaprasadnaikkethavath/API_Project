const express = require("express");
const app = express();
const port = 3300;

app.use(express.json());

require("./db/conn");
const createAPIProjectSchema = require("./model/schema");

app.get("/", (req, res) => {
  res.send("<h1>create api creation project</h1>");
});

app.get("/createdAPIFruits", async (req, res) => {
  try {
    const allFruitsDetails = await createAPIProjectSchema.find({});
    res.status(201).json({ allFruitsDetails });
  } catch (e) {
    console.log(e);
  }
});

app.post("/createAPIFruitsItems", async (req, res) => {
  const fruitsItems = await createAPIProjectSchema.create(req.body);
  res.status(200).json({ fruitsItems });
});

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
