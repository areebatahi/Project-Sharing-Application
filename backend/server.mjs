import express from "express";
import userRoutes from "./routes/userRoutes.mjs"
import chalk from "chalk";
import cors from "cors";
import connectToDB from "./db/mongoDb.mjs";

//Connecting MongoDB
connectToDB()
const app = express();

app.use(
	cors(
	// 	{
	// 	origin: ['http://localhost:5174', 'http://localhost:5173'],
	// 	methods: ['GET', 'PUT', 'POST', 'DELETE'],
	// 	credentials: true,
	// }
),
);


app.use(express.json());
const port = 4000;
app.use("/api/auth",userRoutes)

app.use("/", (req, res, next) => {
  console.log("Request URL:", req.url, "method: ", req.method);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});