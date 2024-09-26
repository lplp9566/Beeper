import express from "express";
import authRouter from "./routes/auth.js"

const app = express();
const PORT = 3000;

app.use(express.json());
// app.get("/",(req,res)=>{
//     req.p
//     res.send("home page")
// })
app.use("/", authRouter);


app.listen(PORT,()=>{console.log("server is listen to port 3000")})

