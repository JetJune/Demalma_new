import express from "express";
import  cors from "cors";
import { connecDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json())
app.use(cors())

// DB Connection
connecDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/", (req, res)=> {
    res.send("API Working")
})

app.listen(port, ()=> {
    console.log(`Server is started on http://localhost:${port}...`)
})


// mongodb+srv://demalma_admin:NousSommes9EnToutDansCeProjet!@cluster0.ml5gd.mongodb.net/?