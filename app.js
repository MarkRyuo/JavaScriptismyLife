// Container 


const btn_show = () => {
    const container = document.getElementById("container").innerHTML = `<input type="text" id="username"> <br>
    <br> <input type="password" id="password">
    <br> <button type="button" onclick="btndone()">Done</button>
    ` ;
}

// Obj 
user = {
    username : "Mark",
    password : "imryuo",
    age : 21
}

let list_of_cars = [
    "Honda",
    "Toyota",
    "Gelly"
]

// Button Done Fuctionality 
const btndone = () => {
    const username = document.getElementById("username").value ; 
    if(username == user.username){
        alert(`Hello: ${user.username}`)
    } 
    else
        alert(`${username} is not in the data`)
}


