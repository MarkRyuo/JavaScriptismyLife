// Container 

const Container = () => {
    const container = document.getElementById("container").innerHTML = `<input type="text" id="username"> <br> <br> <button type="button" onclick="btndone">Done</button>
    ` ;

}

Container()

user = {
    username : "Ryuo",
    password : "imryuo",
    age : 21
}

let username;

if(username == user.username) {
    alert("Hello")
}

const Button_Done = () => {
    const username = document.getElementById("username").value ;
}


