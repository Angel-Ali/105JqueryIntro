function login(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();


let userList=readUsers();
let found=false;
for(var i=0;i<userList.length;i++){
    let user=userList[i];
    if(user.email===email && user.password===password){
        found=true;

console.log("you're in !");
    }
}
if(!found){
    console.log("invalid!")
    $("alertError").removeClass("hide");
    setTimeout(function(){
        $("#alertError").addClass("hide");
    },3000);
    }
}














function init(){
    console.log("Home Page");
    $("#btnLogin").click(login);
}
window.onload=init;