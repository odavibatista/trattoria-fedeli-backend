import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const app = express()

const router = express.Router()

router.get('/', (request, response) => response.json({ ping: `Hello, we're running on Node.js!` }))

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`We're running!`)
})