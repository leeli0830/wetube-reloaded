import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express(); // Create Express instance
const logger = morgan("dev");

const handleHome = (req, res) => {
  res.send("<h1>Home Sweet Home</h1>");
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listening on port: http://localhost:${PORT}`);

app.listen(PORT, handleListening); // Listening to requests on specific port
