function saveUser(user){            //DATA SAVER

    let data=readUsers();           //READ PREVIOUS USERS

    data.push(user);            //PUSHING THE NEW USER


    let val=JSON.stringify(data);

    localStorage.setItem("users",val);
}

function readUsers(){               //DATA RECORDER
  let data = localStorage.getItem("users");
 if(!data){
     return[];          //IF LOCAL STORAGE EMPTY, CREATES AN ARRAY
 } else{
     let list=JSON.parse(data);
     return list;           //IF LOCAL STORAGE HAS STUFF, RETURN THEM
 } 
}

        
function clearUsers(){   
    localStorage.removeItem(KEY_USERS);          
   } 
  
   function readUsers(){             
    localStorage.clear();
  }
  