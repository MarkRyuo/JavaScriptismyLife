// Container 


const btn_show = () => {
    const container = document.getElementById("container").innerHTML = `<input type="text" id="username"> <br> <br> <button type="button" onclick="btndone()">Done</button>
    ` ;
}

// Design for div container
// const Container = () => {
//     const container = document.getElementById("container").innerHTML = `<input type="text" id="username"> <br> <br> <button type="button" onclick="btndone()">Done</button>
//     ` ;
//     return container
// }



// Obj 
user = {
    username : "Ryuo",
    password : "imryuo",
    age : 21
}

// Button Done Fuctionality 
const btndone = () => {
    const username = document.getElementById("username").value ; 
    if(username == user.username){
        alert(`Hello: ${user.username}`)
    } 
    else
        alert(`${username} is not data`)
}


