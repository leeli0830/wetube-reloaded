import express from "express";

const PORT = 4000;

const app = express(); // Create Express instance

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  // First parameter is for request and Second parameter is for response
  return res.end(); // Kill response
};

app.use(gossipMiddleware); // Every route uses this middleware
app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
  console.log(`Server listening on port: http://localhost:${PORT}`);

app.listen(PORT, handleListening); // Listening to requests on specific port
