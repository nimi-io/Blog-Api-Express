import express from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import router from "./routes/index";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Create a TypeORM connection
createConnection()
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Routes
app.use("/api/v1", router);

// ... Other configurations ...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
