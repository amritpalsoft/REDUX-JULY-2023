const promise1 = new Promise((resolve,reject)=>{
    resolve('p1')
})

const promise2 = new Promise((resolve,reject)=>{
    resolve('p2')
})

const promise3 = new Promise((resolve,reject)=>{
    resolve('p3')
})

Promise.all([promise1,promise2,promise3]).then((msg)=>{
    msg.map((item)=>{
        console.log(item);
    })
}).catch((err)=>{
    console.log(err);
})

