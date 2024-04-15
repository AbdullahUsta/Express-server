import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Main Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>+971585965507, +905300745501</h1>");
});

app.get("/about", (req, res) => {
    res.send("<p>I am Abdullah USTA, a web developer!</p>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

