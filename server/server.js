require("dotenv").config();
const cors = require("cors");
const express = require('express')
const dbConnect = require("./config/dbConect");


const app = express();
const port = process.env.PORT || 8888;
app.use(cors());

// đọc hiểu data mà client gửi lên
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();


app.use('/',(req,res)=>{
  res.send("xin chào ban")
})
app.listen(port, () => {
  console.log("Server is running on port", port);
});
