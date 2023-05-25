// const express = require('express')
// const app = express()
// const userRoute = require('./routes/users')
// const productRoute = require('./routes/products')
// const port = 8000

// app.use('/api',userRoute)
// app.use('/api',productRoute)

// app.get('/api',(req,res) => {
//  res.send('express server running')
// })

// app.listen(port,() => {
//  console.log('server about to start');
// })







const express = require('express')
const app = express()
const userRoute = require('./routes/users')
const port = 8000

app.use('/api',userRoute)

app.get('/api',(req,res) => {
 res.send('server gonna boo')
})
app.listen(port,() => {
 console.log('im here for the express routes');
})














