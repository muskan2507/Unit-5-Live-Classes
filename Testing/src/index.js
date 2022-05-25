const validate=(pass)=>{
    let low ="abcdefghijklmnopqrstuvwxyz".split("");
    let num="1234567890".split("")
    let upp=low.map((e)=>e.toUpperCase())
   
    if(pass.length<8){
       return {
           status:false,
           msg:"Min 8 Char Req"
       }
    }
    if(!pass.split("").find((c)=>low.includes(c))){
        return {
            status:false,
            msg:"Min 1 low is Req"
        }
    }
    if(!pass.split("").find((c)=>upp.includes(c))){
        return {
            status:false,
            msg:"Min 1 upp is Req"
        }
    }
    if(!pass.split("").find((c)=>num.includes(c))){
        return {
            status:false,
            msg:"Min 1 num is Req"
        }
    }
    return {
        status:true,
        msg:"pass is valid"
    }
}
module.exports=validate