
const express = require('express')
const PORT = process.env.PORT || '3001'
const mongoose = require('mongoose')

const config = require('./config/dev')

const FakeDB = require('./fake-db')

const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
    () => {
        const fakeDB = new FakeDB()
        fakeDB.initDB()
    }
)

const app = express()

app.use('/api/v1/products',productRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.get('/', (req,res) =>{
    res.send('<h1>hello world</h1>')
})

app.get('/hello', (req,res) =>{
    res.send('<h1>hello</h1>')
})