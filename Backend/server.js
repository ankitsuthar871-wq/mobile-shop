const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// Repair form API  
app.post("/repair", (req, res) => {

    const {name, phone, issue} = req.body

    console.log("New Repair Request")

    console.log("Name:", name)
    console.log("Phone:", phone)
    console.log("Issue:", issue)

    res.json({
        message:"Request submitted successfully"
    })

})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
app.get("/", (req, res) => {
    res.send("Backend server is running 🚀")
})
app.listen(5000, "0.0.0.0", () => {
console.log("Server running on port 5000")
})