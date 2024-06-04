const inputFieldValue = (id) => {
    return document.getElementById(id).value

}

const users = []


const handlelogin = () => {
    event.preventDefault()
    let email = inputFieldValue("email")
    let password = inputFieldValue("password")

    const user = {
        email: email,
        password: password,
        confirm:confirm,
        id:Math.random().toString(36).slice(2),
        status:"Active",
        datacreatred:new Date()

    }
    if (!email) {
       showNotification("Please Enter Email!","error")
        return
    }
    if (!password) {
       showNotification("Please Enter Password!","error")
        return
    }

    let userstorage=JSON.parse(localStorage.getItem('user'))

    let isuserfound = userstorage.find(check => check.email === user.email && check.password === user.password)
    if (!isuserfound) {
       showNotification("Please Register First!","error")
        return
    }

    else if(isuserfound){
       showNotification("Login Successfully","success");
    }
    document.getElementById("loginpage").style.display='none'
    document.getElementById("logout").style.display='block'
    document.getElementById("headpage").style.display='block'
    document.getElementById("headpage").innerHTML='Welcome Back!'+user.email
    
    document.getElementById("headpage").innerHTML=window.location.href="todo.html"
    console.log(user);
    console.log(users);



}

//RegisterPage

const handlesignup = () => {
    event.preventDefault()
    let email = inputFieldValue("email")
    let password = inputFieldValue("password")
    let confirm = inputFieldValue("confirm")

    const user={
        email:email,
        password:password,
        confirm:confirm,
        id:Math.random().toString(36).slice(2),
        status:"Active",
        datacreatred:new Date()
    }

    if(!email){
       
       showNotification("Plese Enter Your Email!","error")
        return
    }
    if(!password || !confirm){
      
       showNotification("Please Enter Your Password","error")
    }
    if(password!=confirm){
       showNotification("Please Enter Your Correct Password","error")
        return 
    }
    if(password.length && confirm.length<6 ){
       showNotification("Please Write Strong Password of minimum 6 digits","error")
        return
    }

    let isuserfound=users.find(check=>check.email===user.email && check.password===user.password)
    if(isuserfound){
       
        showNotification("Already Registered!Please Login","error")
    }
    users.push(user)
    let local=localStorage.setItem("user",JSON.stringify(users))
  
    
   showNotification("Succcessful Registered!","success")

   
}


   



// show notification 
const showNotification = (msg, type) => {
    let bgColor;
    switch (type) {
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break;
        case "default":
            bgColor = "000"
    }


    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor
        },
        onClick: function () { } // Callback after click
    }).showToast();

}