const express = require('express')
const zod = require('zod')
const app = express()

const schema = zod.number()

app.use(express.json())

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if (!response.success) {
        res.status(400).json({
            msg: "Invalid input"
        })
    } else {
        res.json({
            response: response.data
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})