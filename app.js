import express from 'express'
const app = express()
const port = 5000
import  cors from  'cors'

app.use(cors())

app.post('/image', function (req, res) {
  res.json({})
})

app.get('/',function (req,res) {
  res.send("<h1>Yaha kya karne aya hai, main site pe ja </h1>")
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})