function signup(userName){
    let usernames=["radha","krishna","gopal"];
    for(let i=0;i<usernames.length;i++){
        if(userName==usernames[i]){
            return "User Already Regsistered, Please Login"
        }else{
            return "Signup Sucessfull, Please Login"
        }
    }
}
console.log(signup("mohan"));//"Signup Sucessfull, Please Login"
console.log(signup("radha"));//"User Already Regsistered, Please Login"

function login(userName,password){
    let usernames=["radha","krishna","gopal"];
    let isUserPresent =false;
    for(let i=0;i<usernames.length;i++){
        if (userName==usernames[i]){
            isUserPresent =true;
        }
    }
    if (isUserPresent && password=="Emp@123"){
        return "Login Sucessfull..."
    }
    if(isUserPresent && password!=="Emp@123"){
        return "Wrong Password...."
    }
    if(!isUserPresent){
        return "User Not Found, Please Signup"
    }
}
console.log(login("mohan","Emp@123"));//"User Not Found, Please Signup"
console.log(login("radha","Emp@12"));//"Wrong Password...."
console.log(login("radha","Emp@123"));//"Login Sucessfull..."