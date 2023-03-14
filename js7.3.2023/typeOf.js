function dataTypesChecking(value=""){
    if(typeof(value)=="string"){
        return true;
    }
    return false;
}
let value="abcd";
console.log(dataTypesChecking("abcd"));