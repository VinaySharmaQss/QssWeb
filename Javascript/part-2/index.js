function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success= true;
            if(success){
                resolve("Data Fetched SuccessFully");
            }
            else{
                reject("Their is an error in fetching the Data");
            }
        },3000)
    })
}
fetchData()
.then((data)=>{
    console.log(data);
    return `Vinay Sharma`
}).then((val)=>{
    console.log(val);
})
.catch((error)=>{
    console.log(error);
})