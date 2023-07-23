import fetch from 'node-fetch'
let url='https://selfdrvn-qat-api-v2.azurewebsites.net/v3.1/badgescategories'
let myHeader= {
    "Content-Type":"application/json",
    "Authorization":"Bearer 0b03c650824b26e85a17b384f953c155"
}

const apiCall =async () => {
    console.log('1st');
       await fetch(url,{headers:myHeader,method:"GET"}).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log('1');
        }).catch((err)=>{
            console.log(err);
        })
}

const apiCall2 =async () => {
    console.log('2nd');
   await fetch(url,{headers:myHeader,method:"GET"}).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log('2');
    }).catch((err)=>{
        console.log(err);
    })
}

const apiCall3 =async () => {
    console.log('3rd');
   await fetch(url,{headers:myHeader,method:"GET"}).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log('3');
    }).catch((err)=>{
        console.log(err);
    })
}




async function fun(){
//    await apiCall()
//    await apiCall2()
//    await apiCall3()
  await Promise.all([apiCall(),apiCall2(),apiCall3()]).then((res)=>{
    console.log(res);
  })
   console.log('4');
}

fun()
