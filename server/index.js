require("dotenv").config();
const massive = require("massive");
const express = require("express");
const controller = require("./controller");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  console.log("connected to db");
  app.set("db", db);
});

app.get("/property", controller.getProperty);
app.post("/add/property", controller.addProperty);
app.delete("/delete/property", controller.deleteProperty);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
    }
  })
);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
