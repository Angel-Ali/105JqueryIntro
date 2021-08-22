const KEY_USERS="users"
function saveUser(user){            //DATA SAVER

    let data=readUsers();           //READ PREVIOUS USERS

    data.push(user);            //PUSHING THE NEW USER


    let val=JSON.stringify(data);
    localStorage.setItem(KEY_USERS,val);
}

function readUsers(){               //DATA RECORDER
  let data = localStorage.getItem(KEY_USERS);
 if(!data){
     return[];          //IF LOCAL STORAGE EMPTY, CREATES AN ARRAY
 } else{
     let list=JSON.parse(data);
     return list;           //IF LOCAL STORAGE HAS STUFF, RETURN THEM
 } 
}

function clearData(){
    //WARNING THIS WILL CLEAR ALL DATA
    localStorage.clear();
}

