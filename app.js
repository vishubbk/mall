const express = require("express")
const app = express()

const bcrypt = require("bcrypt")
const db = require("./config/mongoose-connection")
const path  = require("path")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const ownersRouter = require("./routes/ownersRouter")
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
require("dotenv").config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use("/owner",ownersRouter)
app.use("/users",userRouter)
app.use("/products",productRouter)
app.listen(3000)

app.get('/', (req, res) => {
    res.render("index",{message:null});
});