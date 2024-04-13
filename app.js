// Container 

const Container = () => {
    const container = document.getElementById("container").innerHTML = `<input type="text" id="username"> <br> <br> <button type="button" onclick="btndone()">Done</button>
    ` ;

}

Container()

user = {
    username : "Ryuo",
    password : "imryuo",
    age : 21
}


const btndone = () => {
    const username = document.getElementById("username").value ;

    if(username == user.username){
        alert("Lol")
    }

    
}


