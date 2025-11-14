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