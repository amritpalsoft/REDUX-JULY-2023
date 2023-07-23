import axios from "axios"
import fetch from 'node-fetch'
let url='https://selfdrvn-qat-api-v2.azurewebsites.net/v3.1/badgescategories'
let myHeader= {
    "Content-Type":"application/json",
    "Authorization":"Bearer a6b885275b22606b1c32df2ea347d143"
}

// api call with fetch
const apiCall =async () =>{ 
    let response= await fetch(url,{
        headers:myHeader,
        method:"GET"
    })
    let data = await response.json()
    console.log(data);
    console.log('inside fun');
}


// api call with axios
const apiCall2 =async () =>{ 
    let response= await axios(url,{
        headers:myHeader,
        method:"GET"
    })
    console.log(response);
    console.log('inside fun');
}

console.log('before');

apiCall()

console.log('after');

apiCall2()