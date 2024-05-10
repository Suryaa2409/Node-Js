const fetchData=callback=>{
    setTimeout(()=>{
        callback("Done");
    },1500)
    console.log("iam here")
}



setTimeout(()=>{
    console.log("Timer is done")
    fetchData(text=>{
        console.log(text);
    })
},5000);

console.log("HI");
console.log("Hello");