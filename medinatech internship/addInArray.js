let userList = [
    {
        "user_name" :   "Ashraful",
        "Full Name" :   "Md. Ashraful",
        "Phone_number" : ["011", "451", "461"]
    },
    {
        "user_name" :   "Shovon",
        "Full Name" :   "Shovon lal",
        "Phone_number" : ["013", "452", "462"]
    },
    {
        "user_name" :   "Jafry",
        "Full Name" :   "Jafry Deep",
        "Phone_number" : ["012", "453", "463"]
    }
];
let checker=0;
let phoneNumberAlreadyExsist=[];
let userListExist=[];
let user_name="sshovon";
let FullName="abc xyz";
let phoneNumberArray=["0","43"];
let newObject={
    "user_name" :   user_name,
    "Full Name" :   FullName,
    "Phone_number" : phoneNumberArray
}
for(i=0;i<userList.length;i++){
    phoneNumberAlreadyExsist=phoneNumberAlreadyExsist.concat(userList[i].Phone_number);
}
console.log(phoneNumberAlreadyExsist);
for(i=0;i<userList.length;i++){
userListExist=userListExist.concat(userList[i].user_name);
}

function checkPhoneNumberExistOrNot(){
    for(i=0;i<phoneNumberArray.length;i++){
        for(j=0;j<phoneNumberAlreadyExsist.length;j++){
            if(phoneNumberArray[i]==phoneNumberAlreadyExsist[j]){
                return false;
            }
        }
    }
    return true;
}
function checkUserNameExist(){
    for(i=0;i<userListExist.length;i++){
        if(userListExist[i]==user_name){
            return false;
        }
    }
    return true;
}
for(i=0;i<userList.length;i++){
    if(!checkUserNameExist()||!checkPhoneNumberExistOrNot()){
        console.log("Not Possible ");
        checker=1;
        break;
    }
    
}
if(checker==0){
    userList.push(newObject);
    console.log(userList);
}
function addUser()


