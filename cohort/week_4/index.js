const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/calculate', (req, res) => {
    const rate = req.query.rate
    const year = req.query.year
    const Amount = req.query.Amount
    const sum = (Amount * rate * year) / 100
    res.json({
        "Total Amount ": sum
    })
})

app.listen(3000)
