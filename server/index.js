if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = 5002;
const cors = require("cors");
const contactRoutes = require("./routers/contact-router");
const downloadRoutes = require("./routers/download-link-router");
const ErrorMiddleware = require("./middlewares/error-middleware");

const corsConfig = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, PATCH, HEAD, DELETE",
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});

app.use("/api/contact", contactRoutes);
app.use("/api/download", downloadRoutes);
app.use(ErrorMiddleware);
