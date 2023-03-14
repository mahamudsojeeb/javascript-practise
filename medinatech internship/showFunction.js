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

//showing particular user full name and phone numbers

function showUser(){
    for(i = 0; i <userList.length; i++){

        if(userList[i].userName == userName){
    
            console.log(userList[i].fullName);
            console.log(userList[i].phoneNumber);
            checker = 1;
            break;
        }
    }
    
    
    if(checker == 0){
        console.log("no user found");
    }

}


let  checker=0;
let userName="Jafry";
showUser();