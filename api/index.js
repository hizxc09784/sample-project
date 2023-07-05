const express = require("express")
const app = express()

app.get("/", async (req,res) => {

  res.send({
    message: "API Working"
  })
  
})

app.listen(3000)
