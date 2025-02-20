// const express = require('express');
// const cors = require('cors')

import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import logger from "./src/middleWare/logger.midldleware.js";

const app = express();
const PORT = process.env.PORT || 8000;



// middleware - its a function that will be used within req,res cycle

app.use(cors());
app.use(express.json());
app.use(logger)
app.use(router)

app.get("/", (req, res) => {
  // res.send('')
  res.end("<h1>welcome to express</h1>");
});



app.listen(PORT, () => {
  console.log("hello work "+PORT);
});
