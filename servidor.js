import express, { Router } from "express";

import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import { fileURLToPath } from "url";
import path from "path";
//import express from "express";

// PORTA
const env = {
  PORT: process.env.PORT || 5000,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS
const setupEjs = (app) => {
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../resources/views"));
  app.set("layout", "layouts/main");
  app.use(expressLayouts);
  app.use(methodOverride("_method"));
  app.use(express.static(path.join(__dirname, "../../public")));
  app.use(bodyParser.urlencoded({ limit: "10md", extended: false }));
};

// EXPRESS
const app = express();
setupEjs(app);

// ROTAS
const router = Router();

router.use("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

router.use("/", (req, res) => {
  res.send("index");
});

app.use(router);

// ESCUTA
app.listen(env.PORT, () =>
  console.log(`Server running at: http://localhost:${env.PORT}`)
);
