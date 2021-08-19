// Login and Register form
// sidebar with weather 

const [get,post,del,put] = document.querySelectorAll('a')
const  [fullname,email] = document.querySelectorAll('input')

const api_url = "  http://localhost:3000/users"


// HTTP get request

get.addEventListener('click', e=> {
    e.preventDefault;
    fetch(api_url)
        .then(res => res.json()
        .then(data => {
            console.log(data)
        })  
    )
})


//HTTP Post Request


post.addEventListener('click', e=> {
    e.preventDefault;
    let newUser = {
        name:fullname.value,
        email: email.value,
        _id: new Date().valueOf()
    }


    console.log(newUser)
    fetch(api_url, {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(newUser)
    })
    .then (response => {
        console.log(response)
    })
})


// HTTP Del request

post.addEventListener('click', e=> {
    e.preventDefault;
    let delUser = {
        name:fullname.value,
        email: email.value,
        // _id: new Date().valueOf()
    }


    console.log(delUser)
    fetch(api_url, {
        method:'DEL',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(delUser)
    })
    .then (response => {
        console.log(response)
    })
})
