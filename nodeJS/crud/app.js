//modules
const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 3001
const {homepage, users, signUp,updateUser,deleteUser} = require('./controller/router.js')


app.use(express.json())
//GET
app.get('/', homepage)
app.get('/users', users)


//POST
app.post('/users', signUp)


//PUT
app.put('/users:id', updateUser )

//DEL
app.delete('/users:id', deleteUser)

app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`)
})