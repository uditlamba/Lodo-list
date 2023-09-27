
function userLogin() {

    event.preventDefault();
    var User=document.getElementById("UserName");
    var Password = document.getElementById("Password");

    console.log("UserName: ", User.value);
    console.log("Password: ", Password.value);

    if (User.value == "udit@gmail.com" && Password.value == "12345" ){

        alert("User autherticated....");
        window.location.href = 'file:///C:/Users/HP/Desktop/Todo%20list/index.html';
        // window=url('file:///C:/Users/HP/Desktop/Todo%20list/index.html');
    }
    else{
        alert("incorrect username and Password")
    }
}
