
let homepage = (req, res) => {
    res.send('Hello World')
}


const getAllUsers = () => {
    const jsonData = fs.readFileSync('users.json','utf-8', (err,data) => {
        console.log(data)
    })
    return JSON.parse(jsonData)
}
const users = (req, res) => {
    res.json()
}


const signUp = (req, res) => {

        
}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}


module.exports ={homepage, users, signUp,updateUser,deleteUser}