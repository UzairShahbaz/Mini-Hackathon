getIputfield=(id)=> {
    return document.getElementById(id).value
 }
 isfound=false 
 
 let Users = []
 
 function handlecreate() {
     event.preventDefault();
     let description = getIputfield("description")
     let title = getIputfield("title")
     let date = getIputfield("date")
     
     let user = {
         description,
         title,
         date,
         
 
     }
 

   
     if(Users.push(user)){
         shownotify("User Successfully Added","success")
     }
     
     console.log(Users)
     showtable()
 }
//  read
 const handleread = () => {
    showtable()

}

 
 //Print User
 
 printuser=()=>{
     console.log(Users)
 }
 
 
 
 
 function showtable(){
     let tableStartingCode='<div class="table-responsive"><table class="table">'
     let tablehead='<thead><tr><th scope="col">#</th><th scope="col">Description</th><th scope="col">Title</th><th scope="col">Date</th> </tr></thead>'
 
   let tableendingcode='</table></div>'
   let tablebody=''
   for(let i=0;i<Users.length;i++){
 
       tablebody+= '<tbody><tr><th scope="row">'+(i+1)+'</th><td>'+Users[i].description+'</td><td>'+Users[i].title+'</td><td>'+Users[i].date+'</td><td></td></tr></tbody>'
 }
 let table=tableStartingCode +tablehead+tablebody+tableendingcode
 document.getElementById("output").innerHTML=table
 }
 
 let shownotify=(msg,type)=>{
     let color=""
     if(type==="success"){
         color="linear-gradient(to right ,#1d976c,#93f9b9)"
     }
 
     else if(type==="error"){
         color="linear-gradient(to right ,#ed213a,#93291e)"
     }else{
         color="#000"
     }
 
     Toastify({
     text: msg,
     duration: 3000,
     close: true,
     gravity: "top", // top or bottom
     position: "center", // left, center or right
     stopOnFocus: true, // Prevents dismissing of toast on hover
     style: {
         background: color,
     },
 }).showToast();
 }