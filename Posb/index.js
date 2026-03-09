import express from "express"
import "dotenv/config";
import cors from "cors";
import Health from "./Routes/Health/Health.js";
const app=express();

app.use(cors({
    origin: "http://localhost:5173", // Vite ka default port
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
const port=process.env.PORT || 3000;
app.use((req, res, next) => {
  console.log("Request Aayi Hai Bhai! Path:", req.url, "Method:", req.method);
  next();
});
app.use("/health",Health);
app.get("/", (req, res) => {
    res.send("Bhai, server mast chal raha hai!");
});
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});