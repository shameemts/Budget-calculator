// let user = {
//     userid:'1',
//     password:'123',
//     username:"sahal"
// }
// let user = {
//     "sahal":{
//         userid:'1',
//         password:'123',
//          username:"sahal"
//     }
// }
// localStorage.setItem('user',JSON.stringify(user))
// console.log(localStorage.getItem('user'));

function login(){

  
  if (JSON.parse(localStorage.getItem('user'))) {
    user=JSON.parse(localStorage.getItem('user'))
  }else{
    user={}
  }
    
    
    if(username.value in user){
      if(user[username.value].username==username.value && user[username.value].password==password.value)
      {
        // alert("successfully")
        window.location='home.html'
      }
      else{
        alert('password not match')
      }
    }else{
        alert("account doesn't exist")
    }
    
}


function signup(){
  if (JSON.parse(localStorage.getItem('user'))) {
    user=JSON.parse(localStorage.getItem('user'))
  }else{
    user={}
  }
  if(username.value in user){
    alert("username already exist")
   }else{
    user[username.value]={
        userid:userid.value,
        username:username.value,
        password:password.value
    }

    localStorage.setItem('user',JSON.stringify(user))
console.log(localStorage.getItem('user'));
  window.location='login.html';

   }
   
    
}