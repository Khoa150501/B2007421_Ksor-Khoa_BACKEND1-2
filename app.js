const ApiError = require("./app/api-error");
const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/router/contact.route");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcom to contact book application."});
});

app.use((err, req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
    });

app.use((err, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});
app.use("/api/contacts", contactsRouter);

module.exports = app;