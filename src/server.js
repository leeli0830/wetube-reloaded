import express from "express";
import morgan from "morgan"; // Morgan is a tool for logging
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express(); // Create Express instance
const logger = morgan("dev"); // "dev" is one of the modes
app.use(logger);

// User routers
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port: http://localhost:${PORT}`);

app.listen(PORT, handleListening); // Listening to requests on specific port
