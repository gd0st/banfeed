import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'

import {initRoutes} from './routes/Feed'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname, { dotfiles: "allow" }));

app.set("port", process.env.PORT || 8080);

// Init server
app.listen(app.get("port"), err => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Server is running on port ${app.get('port')}`);
  }
});

initRoutes(app);