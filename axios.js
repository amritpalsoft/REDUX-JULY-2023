import axios from "axios"

let url='https://selfdrvn-qat-api-v2.azurewebsites.net/v3.1/badgescategories'
let myHeader= {
    "Content-Type":"application/json",
    "Authorization":"Bearer a6b885275b22606b1c32df2ea347d143"
}

axios(url,{
    headers:myHeader,
    method:"GET"
}).then((data)=>{
    console.log(data.data);
}).catch((err)=>{
    console.log(err);
})