import express from "express";

const PORT = 4000;

const app = express(); // Create Express instance

const handleHome = (req, res) => {
  // First parameter is for request and Second parameter is for response
  return res.end(); // Kill response
  // return res.send("I still love you.") // This returns message
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listening on port: http://localhost:${PORT}`);

app.listen(PORT, handleListening); // Listening to requests on specific port
