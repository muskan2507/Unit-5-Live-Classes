function multiply(a,b){

    if(typeof a=="string" || typeof b =="string"){
        return
    }
    return a*b;
}
module.exports=multiply