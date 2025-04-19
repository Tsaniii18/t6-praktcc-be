import express from "express";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(5000, '0.0.0.0', ()=> console.log('Server up and running....'));