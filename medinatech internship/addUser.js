let userList = [
    {
        "userName" :   "Ashraful",
        "fullName" :   "Md. Ashraful",
        "phoneNumber" : ["011", "451", "461"]
    },
    {
        "userName" :   "Shovon",
        "fullName" :   "Shovon lal",
        "phoneNumber" : ["013", "452", "462"]
    },
    {
        "userName" :   "Jafry",
        "fullName" :   "Jafry Deep",
        "phoneNumber" : ["012", "453", "463"]
    }
];


//finding any phone number matched with input phone number

function findNumber(){
    for(let i = 0; i<newObj.phoneNumber.length ; i++){
        
        for(let j = 0; j < userList.length; j++){
            
            for(let k = 0; k < userList[j].phoneNumber.length; k++){
                
                if(newObj.phoneNumber[i] == userList[j].phoneNumber[k]){
                    return true;
            }
        }
    }
}
return false;
}



//adding  new entry if possible

function addNewUser(){
    for(let i = 0; i < userList.length; i++){

        if(userList[i].userName == newObj.userName || findNumber() ){

            console.log("New Entry not possible");
            return 0;
        
        }
    }

    userList.push(newObj);
}


//object to add
let newObj={
    "userName" :   "Ahraful",
    "fullName" :   "M. Ashraful",
    "phoneNumber" : ["123","012"]

}
addNewUser()
console.log(userList);