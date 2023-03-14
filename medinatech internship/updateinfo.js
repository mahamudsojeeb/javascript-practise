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


//funtion to update

function updateInfo(newInfo = {}){
    //checking if there is input or not

    if(JSON.stringify(newInfo) === "{}"){
        console.log("no input");

    }
    else{
        for(let i = 0; i < userList.length; i++){

            if(userList[i].userName == newInfo.userName){

                if(newInfo.fullName !== undefined && newInfo.fullName != ""){
                    userList[i].fullName = newInfo.fullName;
                }
                if(newInfo.phoneNumber !== undefined && newInfo.phoneNumber.length != 0){
                    userList[i].phoneNumber = newInfo.phoneNumber;
                }
    
            }
        }

    }
    
}


//input object
let newInfo={
    "userName" :  "Ashraful",
     "phoneNumber":"4548"
};

//calling the update function
console.clear()
updateInfo(newInfo);
console.log(userList);
