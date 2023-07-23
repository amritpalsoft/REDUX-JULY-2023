const calculate = async() => {
     setTimeout(() => {
    return "123"
    }, 1000);
    
}

let a = setTimeout(() => {
    return 66
}, 1000);


const fun =async () => {
    console.log('inside');
    let response = await a 
       console.log(response);

}
fun()
console.log('outside');