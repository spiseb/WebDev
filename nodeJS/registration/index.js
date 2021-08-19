const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const PORT = 3001


//app settings
app.set('view engine', 'ejs')
// app.set('views',path.join(__dirname,'/views'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/users', (req, res) => {
  fs.readFile(`${__dirname}/users.json`,'utf-8', (err,data) => {
        console.log(data)
        res.render('users', {data: JSON.parse(data)

        })
        
    })
})

app.post('/', (req, res) => {
    fs.readFile(`${__dirname}/users.json`,'utf-8', (err,data) => {
        let currentData = JSON.parse(data)
        currentData.push(req.body)
        fs.writeFile(`${__dirname}/users.json`,JSON.stringify(currentData),(err) => {
            if(err) {
                console.log(err)
            }else {
                console.log('User has been added')
            }
        })
           res.redirect('users')    
    })


    
})

//start server
 app.listen(PORT,()=> { 
     console.log(`Server started on port: ${PORT}`)
 })