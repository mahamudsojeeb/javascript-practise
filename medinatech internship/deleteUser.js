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


let userName="Jafry";

//delete user function

function deleteUserFromArray(){
    for(let i = 0 ; i < userList.length; i++){
        
        if(userList[i].userName == userName){

            userList.splice(i, 1);
            return;
    }
}
console.log("user not found");
}


deleteUserFromArray();
console.log(userList);
