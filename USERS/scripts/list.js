function displayUsers(users){
//TRAVEL ARRAY
for(let i=0;i<users.length;i++){
//GET EACH USER
    let user = users[i];
//DISPLAY THE USER
let syntax=`
    <tr>
        <td> ${user.email} </td>
    <tr>

    <tr>
        <td> ${user.firstName} </td>
    <tr>

    <tr>
        <td> ${user.lastName} </td>
    <tr>

    <tr>
        <td> ${user.age} </td>
    <tr>

    <tr>
        <td> ${user.payment} </td>
    <tr>
    
    <tr>
        <td> ${user.address} </td>
    <tr>
    <tr>
        <td> ${user.phoneNumber} </td>
    <tr>
    <tr>
        <td> ${user.Color} </td>
    <tr>
`;
$("#tblUsers").append(syntax);
//APPEND THE USER TO THE DOM
    }
}

function init(){
    console.log("Listing users");
    var users = readUsers(); //THIS FUNC IS ON THE STORE MANAGER
    displayUsers(users);
    //HOOK EVENT
    $("#btnClear").click(function(){
     clearUsers();
     location.reload();
    })
}

window.onload=init;