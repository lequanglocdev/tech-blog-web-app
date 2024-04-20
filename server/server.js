require("dotenv").config();
const cors = require("cors");
const express = require('express')
const dbConnect = require("./config/dbConect");

const useRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const app = express();
const port = process.env.PORT || 8888;
app.use(cors());

// đọc hiểu data mà client gửi lên
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.listen(port, () => {
  console.log("Server is running on port", port);
});

app.use("/api/user",useRoute)
app.use("/api/auth",authRoute)

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server error'
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})